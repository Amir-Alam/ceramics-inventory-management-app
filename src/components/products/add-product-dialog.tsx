"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  category: z.string().min(1, "Category is required"),
  variants: z.string().min(1, "At least one variant is required"),
  unit: z.string().min(1, "Unit is required"),
  piecesPerBox: z.coerce.number().min(1, "Must be at least 1"),
  sqftPerBox: z.coerce.number().min(0.1, "Must be at least 0.1"),
  supplier: z.string().optional(),
  purchasePrice: z.coerce.number().optional(),
  sellingPrice: z.coerce.number().optional(),
  notes: z.string().optional(),
});

type ProductFormData = z.infer<typeof productSchema>;

export function AddProductDialog() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: ProductFormData) => {
    console.log("[ADD PRODUCT]:", data);
    toast.success("✅ Product added successfully!");
    reset();
  };

  const LabelWithAsterisk = ({ label }: { label: string }) => (
    <Label>
      {label} <span className="text-red-500">*</span>
    </Label>
  );

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-gray-800 text-white hover:bg-gray-900 transition-colors duration-200">
          + Add New Product
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            📦 Add New Product
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Enter detailed product information to manage your inventory
            efficiently.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4 py-2"
        >
          {/* Product Name */}
          <div className="col-span-2 space-y-1">
            <LabelWithAsterisk label="Product Name" />
            <Input {...register("name")} placeholder="e.g. Marble Tile A" />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Category */}
          <div className="space-y-1">
            <LabelWithAsterisk label="Category" />
            <Input
              {...register("category")}
              placeholder="e.g. Tiles/Sanitary"
            />
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>

          {/* Variants */}
          <div className="space-y-1">
            <LabelWithAsterisk label="Variant(s)" />
            <Input {...register("variants")} placeholder="e.g. 12x12, 24x24" />
            {errors.variants && (
              <p className="text-sm text-red-500">{errors.variants.message}</p>
            )}
          </div>

          {/* Unit */}
          <div className="space-y-1">
            <LabelWithAsterisk label="Unit (Sales Unit)" />
            <Input {...register("unit")} placeholder="e.g. SqFt, Box" />
            {errors.unit && (
              <p className="text-sm text-red-500">{errors.unit.message}</p>
            )}
          </div>

          {/* Pieces per Box */}
          <div className="space-y-1">
            <LabelWithAsterisk label="Pieces per Box" />
            <Input type="number" {...register("piecesPerBox")} />
            {errors.piecesPerBox && (
              <p className="text-sm text-red-500">
                {errors.piecesPerBox.message}
              </p>
            )}
          </div>

          {/* SqFt per Box */}
          <div className="space-y-1">
            <LabelWithAsterisk label="SqFt per Box" />
            <Input
              type="number"
              step="0.01"
              {...register("sqftPerBox")}
              placeholder="e.g. 16.5"
            />
            {errors.sqftPerBox && (
              <p className="text-sm text-red-500">
                {errors.sqftPerBox.message}
              </p>
            )}
          </div>

          {/* Supplier */}
          <div className="space-y-1">
            <Label>Supplier (optional)</Label>
            <Input {...register("supplier")} placeholder="e.g. Kajaria" />
          </div>

          {/* Purchase Price */}
          <div className="space-y-1">
            <Label>Purchase Price (₹ / Box)</Label>
            <Input
              type="number"
              {...register("purchasePrice")}
              placeholder="e.g. 250"
            />
          </div>

          {/* Selling Price */}
          <div className="space-y-1">
            <Label>Selling Price (₹ / SqFt)</Label>
            <Input
              type="number"
              {...register("sellingPrice")}
              placeholder="e.g. 48"
            />
          </div>

          {/* Notes */}
          <div className="col-span-2 space-y-1">
            <Label>Notes (optional)</Label>
            <Textarea
              {...register("notes")}
              rows={2}
              placeholder="Any specific info or internal note..."
            />
          </div>

          {/* Submit */}
          <div className="col-span-2 flex justify-end pt-8">
            <Button
              type="submit"
              className="w-full sm:w-auto bg-green-500 text-white hover:bg-green-600"
            >
              Save Product
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
