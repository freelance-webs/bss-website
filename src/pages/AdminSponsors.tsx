import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useSponsors } from "@/hooks/useSponsors";
import { Pencil, Trash2, Plus } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";

const AdminSponsors = () => {
  const { data: sponsors, isLoading } = useSponsors();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    display_order: 0,
  });

  const resetForm = () => {
    setFormData({ name: "", description: "", image: "", display_order: 0 });
    setEditingId(null);
    setIsCreating(false);
  };

  const handleEdit = (sponsor: any) => {
    setEditingId(sponsor.id);
    setFormData({
      name: sponsor.name,
      description: sponsor.description || "",
      image: sponsor.image || "",
      display_order: sponsor.display_order,
    });
    setIsCreating(false);
  };

  const handleCreate = () => {
    resetForm();
    setIsCreating(true);
  };

  const handleSave = async () => {
    if (!formData.name) {
      toast({
        title: "Error",
        description: "Name is required",
        variant: "destructive",
      });
      return;
    }

    try {
      if (editingId) {
        const { error } = await supabase
          .from("sponsors")
          .update(formData)
          .eq("id", editingId);

        if (error) throw error;
        toast({ title: "Success", description: "Sponsor updated successfully" });
      } else {
        const { error } = await supabase.from("sponsors").insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Sponsor created successfully" });
      }

      queryClient.invalidateQueries({ queryKey: ["sponsors"] });
      resetForm();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this sponsor?")) return;

    try {
      const { error } = await supabase.from("sponsors").delete().eq("id", id);

      if (error) throw error;
      toast({ title: "Success", description: "Sponsor deleted successfully" });
      queryClient.invalidateQueries({ queryKey: ["sponsors"] });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleImageUpload = (url: string) => {
    setFormData({ ...formData, image: url });
  };

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Sponsors</h1>
          <Button onClick={handleCreate}>
            <Plus className="mr-2 h-4 w-4" />
            Add Sponsor
          </Button>
        </div>

        {(isCreating || editingId) && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingId ? "Edit Sponsor" : "Create New Sponsor"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Sponsor Name"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Sponsor Description"
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Logo Image</label>
                <ImageUpload
                  currentImage={formData.image}
                  onImageUpload={handleImageUpload}
                  folder="sponsors"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Display Order</label>
                <Input
                  type="number"
                  value={formData.display_order}
                  onChange={(e) =>
                    setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })
                  }
                  placeholder="0"
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleSave}>Save</Button>
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          {isLoading ? (
            <p>Loading sponsors...</p>
          ) : sponsors && sponsors.length > 0 ? (
            sponsors.map((sponsor) => (
              <Card key={sponsor.id}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4 flex-1">
                    {sponsor.image && (
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="w-16 h-16 object-contain"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-lg">{sponsor.name}</h3>
                      {sponsor.description && (
                        <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        Display Order: {sponsor.display_order}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleEdit(sponsor)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(sponsor.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-8">
              No sponsors yet. Click "Add Sponsor" to create one.
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSponsors;
