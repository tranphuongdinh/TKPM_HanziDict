import { getCharactersClient } from "../apis/getCharactersClient";
import Searchbar from "../components/Searchbar";
import Template from "../containers/Template";

const Home = ({ data }) => {
    console.log(data);
    return (
        <Template title="Trang chủ | Hanzi Dict">
            <Searchbar></Searchbar>
        </Template>
    );
};

export async function getServerSideProps(ctx) {
    const data = await getCharactersClient().getAllChars();
    return {
        props: {
            data,
        },
    };
}

export default Home;
