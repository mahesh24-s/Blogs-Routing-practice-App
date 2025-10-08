import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams(); // eslint-disable-line no-unused-vars
  const location = useLocation();

  useEffect(() => {
    // at a time we can only display one page from this array {homepage,categorypage,tagpage,blogpage} so we first chk in url if anything like tag/category/blog is mentioned
    // we have created blogtitle/tagsname/categoryname using navlink and when they are clicked we are moving to the mentioned address which contains the currently clicked page category(like category/tag/blogpage) in its url 
    // and when we check url for the headers which we want to display if we find page we simply display homepage,if we find tags in url we will display tags page ,if we find categories
    //then we display tags page and for blogs if we find blogid , we display blopage

    //searchParameters.get() returns value based on search parameters keys
    // http://localhost:3000/?page=3 in this url the search parameters comes after "?" and the key is page and value is 3
    // http://localhost:3000/tags/Software-Development?page=2 int his url the key is page and value is 2 always search parameters comes after "?" symbol in url
    const page =  searchParams.get("page") ?? 1; 
    // this call gets the page number if present in search parameters or else sets default value page as 1 , when on home page in url we dont see the page search parameters or for any homepage/blogpage or any page we dont see the page=1 search param when 
    //we change the page to 2 or 3 or any num>1 we see search parameters page in url and it returns page value if present


    if(location.pathname.includes("tags")) {
      //iska matlab tag wala page show krna h 
      // it splits the url when it finds / and returns the last one after replacing all the "-" with spaces because in  we have url like http://localhost:3000/tags/Project-Management it splits 
      // on basis of "/" and last one after "/" is project-management and replace "-" with space and it becomes project management and then calls the fetchblogs with tag nad page Number
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }

    else if(location.pathname.includes("categories")) {
      //it means we have to show category page 
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }

    else {
      // if we are on home page we dont find any categories/tags in url so we call fetchBlogPosts to display homepage with page number
      fetchBlogPosts(Number(page));
    }

  }, [location.pathname, location.search]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Routes>
      <Route path="/" element = {<Home/>}   />
      {/* after blog :blogId starting with colon means it is a dynamic parameter */}
      <Route path="/blog/:blogId" element = {<BlogPage/>}   />
      <Route path="/tags/:tag" element = {<TagPage/>}   />
      <Route path="/categories/:category" element = {<CategoryPage/>}   />
    </Routes>
  );
}
