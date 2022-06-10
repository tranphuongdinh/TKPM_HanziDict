import type { NextPage } from "next";
import Head from "next/head";
import { MainSection } from "../components/Commons/Commons.style";
import { SearchBar } from "../containers/Header/Header.style";

const data = {
    pinyin: "zi",
    chineseName: "子",
    mean: "con, đứa bé",
    deepMean:
        "Duyên thiên chửa thấy nhô đầu dọc/Phận liễu sao đành nảy nét ngang",
    explain:
        "Chữ liễu 了 là chỉ người con gái thân hình mảnh mai như cây liễu (mượn âm liễu, cây liễu: 柳 ), mà có “nảy nét ngang",
    img: [
        "https://storage.googleapis.com/friendlyclassroombe.appspot.com/character/gu%C3%B3/1654787875458-2.png?GoogleAccessId=firebase-adminsdk-iawwe%40friendlyclassroombe.iam.gserviceaccount.com&Expires=1754586000&Signature=O4lMCA9fSI0%2FKuoQZkNMh2PmPhQ19yYZVBJB6ovgE6DsfjLyyTnE72xfhUQyh39mMBXV7mzgb9P%2FHrnbcP3HiXc4znNkVk88HdOqnfYcSWdPc0yCNVDnJMyXjdc4L%2BLYoVsJ2nqJp808vuxuqSODEbQGn1qtFCAFouOjRCpGzrwp9zSds9ehxjeojKI9u51g2CD79CCXbNtb9DApA9R%2BULta66QJIyQJz1HkGl2TfoIdFFL9ut88mqCkr%2BWPQp4WYiC2ZrATAqaTQbzB5bEboe3fDdQK5JodKLNT%2B%2FoTTBLHgKOhmvm1x7X7gUTiyVV6TGkApk%2F5v5HhZiScokTHnA%3D%3D",
        "https://storage.googleapis.com/friendlyclassroombe.appspot.com/character/gu%C3%B3/1654787875459-3.png?GoogleAccessId=firebase-adminsdk-iawwe%40friendlyclassroombe.iam.gserviceaccount.com&Expires=1754586000&Signature=DEo6%2F1dWe1N%2By9JOVzruNTP77rnp2hc38NeHBIhp5uRAE9GHKi%2FOoTsoQIdkEextVN0%2BeefulYeZf%2FNEV06Xt%2FFzs%2Bka%2FcreLszgSIlR9SIt94%2FAfPcg4oRztg4JpJTAgfFBls1dHxIvlcntK632pkpuzz6Zl8HkkuX5yM8EbBKtxvPBBvmVuuSUrdZVBcjbOjrmfsd5CgjQsz5%2FlU8OlKqAuda51JjwWxOkHXLjBJn8f0n2p0HczpCIwyRUBNgeFh2QW8kuUwfzCRCmwuJre3hc6u%2FVlUGjDSvDXj2TSZghRennpv0N16%2FNhHU4j34iir3q1A49uq%2F5XmVY%2FyNQ%2Bg%3D%3D",
        "https://storage.googleapis.com/friendlyclassroombe.appspot.com/character/gu%C3%B3/1654787875461-4.png?GoogleAccessId=firebase-adminsdk-iawwe%40friendlyclassroombe.iam.gserviceaccount.com&Expires=1754586000&Signature=MWAMY9s6tIj6KBNATGi5%2Fpfyy%2Fil0TFdD%2Bq9MUe0nU7OSjbFRNvvhhegmBiNhc0OG9D%2F2lYBplhA8lyeamwcbYRVXchS0JqjgKQnW3T3E9ZvUzkv8H4rUWiFNn9xvrTr8yWoEdc89bmNrmTJISMa85w3FaCOPhvAhiQvBY8cDhsR8GqAnATsv%2F%2Bd4nGOFNNkWfg44u0%2FzjjzCKzkuOF4efmTJKZCSgM5zUJk%2BMgFOG7BXJuw5074cEI7DvcasR80OU728OUe9kIsZypAmkz%2BficWoTmOghPiB3d5xPU4002WxpexjNrze0sXQLNqrjoQ1tgUONWVqVllASRsC970TA%3D%3D",
        "https://storage.googleapis.com/friendlyclassroombe.appspot.com/character/gu%C3%B3/1654787875462-5.png?GoogleAccessId=firebase-adminsdk-iawwe%40friendlyclassroombe.iam.gserviceaccount.com&Expires=1754586000&Signature=KWNHBdpDruqpou75NuELwBYb8Ms2X9iNZpr6Z5Y6qBtfx8Ie1j%2F%2BA9H9yrp%2Bkvozbm8o2twMJt%2Bm7GU01YVFcYbvbAPv95FG2w%2FnBvqYbBGvDu0TJvp73uqnDZR4mTU%2BNIVHS0NzaToxnUW%2BZEyZAOiKjIAwhlUblrk2yZdD4xqHx2N%2BrYQy2aXGsDAuheHgK1T6WiqjXBnNtSPOYa9KDpNZ9iVfwVSaSQCFitr9YUwnqsd3A14LIsfFDIFmEVimY8bFsCJ84zxoqzvoy9knMUXA8X%2BgW%2FxwqwWpVaiUsxTURPnM99WBLlQcvVU4NytBcSjb4Wa6Naw%2B%2FmIv1pPdtg%3D%3D",
    ],
};

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Hanzi Dict</title>
            </Head>
            <MainSection>
                <SearchBar>
                    <input type="text" placeholder="Tìm kiếm từ..."></input>
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </SearchBar>
                <div className="resBlock">
                    <div className="resHeader">子 (zi)</div>
                    <div className="resBody">
                        <p>
                            <b>Pinyin:</b> {data.pinyin}
                        </p>
                        <p>
                            <b>Hanzi:</b> {data.chineseName}
                        </p>
                        <p>
                            <b>Meaning:</b> {data.mean}
                        </p>
                        <p>
                            <b>Deep mean:</b> {data.deepMean}
                        </p>
                        <p>
                            <b>Giải thích:</b> {data.explain}
                        </p>
                    </div>
                </div>
                <div className="imgBlock">
                    {data.img.map((img, index) => {
                        return <img src={img} key={index} />;
                    })}
                </div>
            </MainSection>
        </div>
    );
};

export default Home;
