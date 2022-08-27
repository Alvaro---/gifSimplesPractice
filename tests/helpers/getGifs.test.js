import { getGifs } from "../../src/helpers/getGifs"

describe('test in getGifs', () => {
    test('should return array of gifs', async () => {
        const gifs = await getGifs('Friends');
        // console.log(gifs)
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            imageUrl: expect.any(String),
        })
    })
})