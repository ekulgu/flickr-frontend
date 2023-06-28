import React, { useState } from "react";
import { fetchImages } from "../api/services";
import Search from "./Search";
import Loading from "./Loading";
import Grid from "@mui/material/Grid";

const FeedViewer = () => {
  const [keyword, setKeyword] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // On click seach icon btn this function will be called to recieve Flickr images
  const handleSearchInput = async () => {
    setLoading(true);
    if (keyword) {
      try {
        const data = await fetchImages(keyword);
        setImages(data);
      } catch (error) {
        console.error("Error from FeedViewer while fetching:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setImages([]);
      setLoading(false);
    }
  };

  return (
    <div>
      <Search
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearchInput={handleSearchInput}
      />
      {loading && <Loading />}
      <Grid container spacing={0}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={image.link}>
            <img key={image.link} src={image.media.m} alt={image.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeedViewer;
