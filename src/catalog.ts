import { Producto, CategoriaProducto } from "./models";

// Arreglo de objetos tipado (Catálogo inicial)
export const catalogoProductos: Producto[] = [
  { id: 1, nombre: "Laptop Gamer", categoria: "Electrónica", precio: 1200, disponible: true },
  { id: 2, nombre: "Mouse Inalámbrico", categoria: "Accesorios", precio: 30, disponible: true },
  { id: 3, nombre: "Teclado Mecánico", categoria: "Accesorios", precio: 80, disponible: false },
  { id: 4, nombre: "Monitor 4K", categoria: "Electrónica", precio: 400, disponible: true },
  { id: 5, nombre: "Memoria RAM 16GB", categoria: "Componentes", precio: 75, disponible: true }
];

// Función 1: FILTRADO - Obtiene productos según su categoría
export function obtenerPorCategoria(productos: Producto[], categoria: CategoriaProducto): Producto[] {
  return productos.filter(producto => producto.categoria === categoria);
}

// Función 2: CÁLCULO - Calcula el costo total de los productos disponibles en inventario
export function calcularValorTotalInventario(productos: Producto[]): number {
  return productos
    .filter(producto => producto.disponible)
    .reduce((total, producto) => total + producto.precio, 0);
}

// Función 3: TRANSFORMACIÓN - Convierte la lista de productos en cadenas de texto formateadas
export function obtenerResumenProductos(productos: Producto[]): string[] {
  return productos.map(producto => 
    `[ID ${producto.id}] ${producto.nombre} - $${producto.precio} (${producto.disponible ? 'Disponible' : 'Agotado'})`
  );
}