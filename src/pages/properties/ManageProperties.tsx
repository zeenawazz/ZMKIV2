import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  MapPin,
  Home,
  DollarSign,
  Users,
} from "lucide-react";
import { AddPropertyDialog } from "@/components/properties/AddPropertyDialog";
import { PropertyFormData } from "@/components/properties/PropertyForm";

interface Property extends PropertyFormData {
  id: number;
  occupancyRate: string;
  monthlyRevenue: string;
  status: string;
}

const ManageProperties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      name: "Skyline Apartments",
      type: "residential",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      units: "24",
      description: "Luxury apartment complex",
      occupancyRate: "92%",
      monthlyRevenue: "$52,000",
      status: "Active",
    },
    // ... other initial properties
  ]);

  const handleAddProperty = (formData: PropertyFormData) => {
    const newProperty: Property = {
      ...formData,
      id: properties.length + 1,
      occupancyRate: "0%",
      monthlyRevenue: "$0",
      status: "Active",
    };
    setProperties([...properties, newProperty]);
  };

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Rest of your component code remains the same...
  
  return (
    <div className="bg-kingdom-dark min-h-screen pt-16">
      <Navigation />
      <div className="md:ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text mb-2">
              Property Management
            </h1>
            <p className="text-kingdom-text/80">
              Manage and monitor your property portfolio
            </p>
          </div>
          <AddPropertyDialog onSubmitProperty={handleAddProperty} />
        </div>

        {/* Rest of your JSX remains the same... */}
      </div>
    </div>
  );
};

export default ManageProperties;