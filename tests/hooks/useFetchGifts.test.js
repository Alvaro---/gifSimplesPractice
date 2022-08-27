import { useFetchGifts } from "../../src/hooks/useFetchGifts"
import { renderHook, waitFor } from '@testing-library/react'

describe('useFetchGifts', () => {
    test('should return initial value', () => {
        const { result } = renderHook(() => useFetchGifts('OnePunch'));
        console.log(result)
        const { images, isloading } = result.current;

        expect(images.length).toBe(0);
        expect(isloading).toBeTruthy();
        // useFetchGifts();
    })

    test('should return array of images and is loading false', async () => {
        const { result } = renderHook(() => useFetchGifts('OnePunch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy();
        // useFetchGifts();
    })

})