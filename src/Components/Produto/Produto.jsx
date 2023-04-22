import React from "react";
import { useParams } from "react-router-dom";

const Produto = () => {
    const [produto, setProduto] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
  const { id } = useParams();

  React.useEffect(() => {
    async function fecthProduto(url) {
        try{
            setLoading(true)
            const response = await fetch(url);
            const json = response.json()
            console.log(response);
        } catch (erro) {
            setError('Um erro ocorreu')
        } finally {
            setLoading(false)
        }
      
    }
    fecthProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

    if(loading) return <div>Carrengando</div>
    if(error) return <p>{error}</p>
  if(produto === null) return null

  return <div>
    <div>
        <h1>{produto.nome}</h1>
    </div>
  </div>;
};
export default Produto;
