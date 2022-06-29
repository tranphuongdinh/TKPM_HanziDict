import { getCharactersClient } from "/apis/getCharactersClient";
import Template from "/containers/Template";
import { CharacterDetail } from "../../components/CharacterDetail";

const SearchResult = ({ data }) => {
  return (
    <Template title="Search result | Hanzi Dict">
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
