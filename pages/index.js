import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'


export default function Home() {
  return (
    <Layout title="Home">
      <div>
        {
          data.products.map((product) => (
            <ProductItem product={product} key={product.slug}/>
          ))
        }
      </div>
    </Layout>
  )
}
