import { getCharactersClient } from "../../apis/getCharactersClient";
import Template from "../../containers/Template";

const SearchResult = ({ data, char }) => {
    return (
        <Template title="Search result | Hanzi Dict">
            <h1>{char}</h1>
            {JSON.stringify(data)}
        </Template>
    );
};

export async function getServerSideProps(ctx) {
    const { id, char = "" } = ctx.query;
    const data = await getCharactersClient().getCharById(id);

    return {
        props: {
            data: data || null,
            char: char || data?.character?.detail?.chineseName || "Not found",
        },
    };
}

export default SearchResult;
