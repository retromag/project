import { ProductService } from '@/service/api/ProductService'
import { cached } from '@/service/cache'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductsActions } from '../enums/actions'
import { AsyncThunkConfig } from '../types/global.types'
import { IProduct } from '../types/reducers/products'

interface ReturnType {
  keyboards: IProduct[]
}

const cachedGetProductReq = cached(() => ProductService.get())

const getAllProducts = createAsyncThunk<ReturnType, void, AsyncThunkConfig>(ProductsActions.GET_ALL, async () => {
  const keyboards = await cachedGetProductReq()

  return { keyboards }
})

const changeFilteredProducts = createAsyncThunk<ReturnType, string, AsyncThunkConfig>(
  ProductsActions.CHANGE_FILTERS,
  async (query) => {
    const actualQuery = query ? `?${query}` : ''
    console.log(actualQuery)

    const keyboards = await ProductService.get(actualQuery)
    return { keyboards }
  }
)

export { getAllProducts, changeFilteredProducts }