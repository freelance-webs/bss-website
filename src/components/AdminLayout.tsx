import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut, Calendar, Users, Award } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/admin");
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/admin");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <nav className="bg-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <div className="flex gap-4">
              <Link to="/admin/events">
                <Button 
                  variant={location.pathname === "/admin/events" ? "default" : "ghost"}
                  className="gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Events
                </Button>
              </Link>
              <Link to="/admin/team">
                <Button 
                  variant={location.pathname === "/admin/team" ? "default" : "ghost"}
                  className="gap-2"
                >
                  <Users className="h-4 w-4" />
                  Team
                </Button>
              </Link>
              <Link to="/admin/sponsors">
                <Button 
                  variant={location.pathname === "/admin/sponsors" ? "default" : "ghost"}
                  className="gap-2"
                >
                  <Award className="h-4 w-4" />
                  Sponsors
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <Link to="/">
              <Button variant="outline">View Site</Button>
            </Link>
            <Button variant="outline" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
