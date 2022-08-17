// api.giphy.com/v1/gifs/search?api_key=ipAQldA03CsZ7rXyTEXB8fjzytqNQgcT&q=valoran
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ category }) => {
  //Es una buena practica sacar el getGifs ya que no usara memoria cada re render
  //Nunca se deben llamar funciones fuera de una funcion ya que se llamara de nuevo con cada re render.

  const { images, isloading } = useFetchGifts(category);
  //El hook llama la re renderizacion

  console.log(isloading);

  // TODA LA LOGICA DE CARGA PUEDE IR EN UN CUSTOM HOOK
  //   const [images, setImages] = useState([]);

  //   const getImages = async () => {
  //     const newImages = await getGifs(category);
  //     setImages(newImages);
  //   };

  //   //Use effect no puede ser async. Si se puede usar el then. Pero si no se quiere se puee separar en una funcion y llamarla desde el useEffect
  //   useEffect(() => {
  //     getImages();
  //     // getGifs(category).then((newImages) => setImages(newImages));
  //   }, []);

  return (
    <>
      <h3>{category}</h3>

      {/* <LoadingMessage isloading={isloading} /> */}
      {/* Se puede crear ese componente que tenga la condicion por si mismo. */}
      {isloading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GiftGridItem key={image.id} {...image} />
          //El operador ... enviara ada propiedad como property
        ))}
      </div>
    </>
  );
};
