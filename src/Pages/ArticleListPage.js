import articles from "./article-content";
import ArtcileList from "../Components/ArticleList";

const ArticleListPage = () => {
    return (
        <>
            <h1>Article List Page</h1>
            <ArtcileList articles={articles} />
        </>
    );
}

export default ArticleListPage;