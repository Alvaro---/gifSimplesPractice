export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ipAQldA03CsZ7rXyTEXB8fjzytqNQgcT&q=${category}&limit=20`;
    const resp = await fetch(url);
    // console.log(resp);
    const { data = [] } = await resp.json();
    // console.log(data);

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        imageUrl: img.images.downsized_medium.url,
    }));

    // console.log(gifs);
    return gifs;
};
