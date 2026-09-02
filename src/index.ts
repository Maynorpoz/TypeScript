import { 
  catalogoProductos, 
  obtenerPorCategoria, 
  calcularValorTotalInventario, 
  obtenerResumenProductos 
} from "./catalog";

console.log("====================================");
console.log("      CATÁLOGO DE PRODUCTOS        ");
console.log("====================================");
console.log(obtenerResumenProductos(catalogoProductos));

console.log("\n====================================");
console.log("   PRODUCTOS DE CATEGORÍA ACCESORIOS ");
console.log("====================================");
console.log(obtenerPorCategoria(catalogoProductos, "Accesorios"));

console.log("\n====================================");
console.log("   VALOR TOTAL DEL INVENTARIO       ");
console.log("====================================");
console.log(`$${calcularValorTotalInventario(catalogoProductos)} USD`);