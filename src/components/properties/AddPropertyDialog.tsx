import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { PropertyForm, PropertyFormData } from "./PropertyForm";

interface AddPropertyDialogProps {
  onSubmitProperty: (data: PropertyFormData) => void;
}

export const AddPropertyDialog = ({ onSubmitProperty }: AddPropertyDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" /> Add Property
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-kingdom-dark border-kingdom-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            Add New Property
          </DialogTitle>
        </DialogHeader>
        <PropertyForm 
          onSuccess={() => setOpen(false)} 
          onSubmitProperty={onSubmitProperty}
        />
      </DialogContent>
    </Dialog>
  );
};