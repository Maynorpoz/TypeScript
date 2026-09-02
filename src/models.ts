// Tipo personalizado para las categorías de productos
export type CategoriaProducto = "Electrónica" | "Accesorios" | "Componentes";

// Interfaz que define la estructura de cada producto
export interface Producto {
  id: number;
  nombre: string;
  categoria: CategoriaProducto;
  precio: number;
  disponible: boolean;
}