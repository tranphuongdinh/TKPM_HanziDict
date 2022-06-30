import { CharacterDetail } from "../../components/CharacterDetail";
import { getCharactersClient } from "/apis/getCharactersClient";
import Template from "/containers/Template";

const SearchResult = ({ data }) => {
    const title = `${data.character.chineseName} - ${data.character.pinyin}`;
    return (
        <Template title={`${title} | Hanzi Dict`}>
            <CharacterDetail data={data} />
        </Template>
    );
};

export async function getServerSideProps(ctx) {
    const { id } = ctx.query;
    const data = await getCharactersClient().getCharById(id);
    return {
        props: {
            data: data,
        },
    };
}

export default SearchResult;
