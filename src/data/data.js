import RemeraAbbey from "../images/remera.png"
import TazaRevolver from "../images/taza.jpeg"
import DiscoPlease from "../images/disco.jpeg"
import DiscoAbbey from "../images/discoabbeyroad.jpeg"
import TazaWithTheBeatles from "../images/tazawiththebeatles.jpeg"
import RemeraSgtPeppers from "../images/remerasgtpeppers.jpeg"

const data = [
    {
        id: '1',
        title: "Remera Abbey Road",
        description: "Remera de Algodón Peinado 24/1 (Calidad Premium) - Estampado en Vinilo Termo transferible (No se despega y mantiene el color y la calidad mucho mas tiempo que el estampado tradicional!!!)",
        price: 1500,
        pictureUrl: RemeraAbbey,
        stock: 50,
        category: 'remeras'
    }, 
    {
        id: '2',
        title: "Taza Revolver",
        description: "TAZAS DE PORCELANA IMPORTADA - LA MEJOR CALIDAD EN TAZAS! - Porcelana premium IMPORTADA, 100% rectas y brillantes. Nuestras tazas están sublimadas en productos de excelente calidad. Rectas, sin fallas y resistentes a microondas.",
        price: 1000,
        stock: 100,
        pictureUrl: TazaRevolver,
        category: 'tazas'
    },
    {
        id: '3',
        title: "Disco Please Please Me",
        description: "The Beatles PLEASE PLEASE ME Vinilo Remastered Nuevo",
        price: 6800,
        stock: 20,
        pictureUrl: DiscoPlease,
        category: 'discos'
    },
    {
        id: '4',
        title: "Disco Abbey Road",
        description: "The Beatles ABBEY ROAD Vinilo Remastered Nuevo",
        price: 6800,
        stock: 20,
        pictureUrl: DiscoAbbey,
        category: 'discos'
    },
    {
        id: '5',
        title: "Taza With the Beatles",
        description: "TAZAS DE PORCELANA IMPORTADA - LA MEJOR CALIDAD EN TAZAS! - Porcelana premium IMPORTADA, 100% rectas y brillantes. Nuestras tazas están sublimadas en productos de excelente calidad. Rectas, sin fallas y resistentes a microondas.",
        price: 1000,
        stock: 100,
        pictureUrl: TazaWithTheBeatles,
        category: 'tazas'
    },
    {
        id: '6',
        title: "Remera Sgt. Pepper's",
        description: "Remera de Algodón Peinado 24/1 (Calidad Premium) - Estampado en Vinilo Termo transferible (No se despega y mantiene el color y la calidad mucho mas tiempo que el estampado tradicional!!!)",
        price: 1500,
        pictureUrl: RemeraSgtPeppers,
        stock: 50,
        category: 'remeras'
    }
]

export default data;