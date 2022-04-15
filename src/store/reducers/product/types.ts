import {IProduct} from "../../../models/IProduct";
import {IFilter} from "../../../models/IFilter";

export interface ProductState {
    products: IProduct[]
    selectedProduct: IProduct,
    sort: string
    filter: IFilter
    showAmount: number
    catalogPage: number
    layout: string
    search: string
}

export enum ProductActionsEnum {
    SET_PRODUCTS = 'SET_PRODUCTS',
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT',
    SET_SORT = 'SET_SORT',
    SET_FILTER = 'SET_FILTER',
    SET_SHOW_AMOUNT = 'SET_SHOW_AMOUNT',
    SET_CATALOG_PAGE = 'SET_CATALOG_PAGE',
    SET_LAYOUT = 'SET_LAYOUT',
    SET_SEARCH = 'SET_SEARCH'
}

export interface SetProductsAction {
    type: ProductActionsEnum.SET_PRODUCTS,
    payload: IProduct[]
}

export interface AddProductAction {
    type: ProductActionsEnum.ADD_PRODUCT,
    payload: IProduct
}

export interface RemoveProductAction {
    type: ProductActionsEnum.REMOVE_PRODUCT,
    payload: string
}

export interface SetSelectedProductAction {
    type: ProductActionsEnum.SET_SELECTED_PRODUCT
    payload: IProduct
}

export interface SetSortAction {
    type: ProductActionsEnum.SET_SORT,
    payload: string
}

export interface SetFilterAction {
    type: ProductActionsEnum.SET_FILTER,
    payload: IFilter
}

export interface SetShowAmountAction {
    type: ProductActionsEnum.SET_SHOW_AMOUNT,
    payload: number
}

export interface SetCatalogPageAction {
    type: ProductActionsEnum.SET_CATALOG_PAGE,
    payload: number
}

export interface SetLayoutAction {
    type: ProductActionsEnum.SET_LAYOUT,
    payload: string
}

export interface SetSearchAction {
    type: ProductActionsEnum.SET_SEARCH,
    payload: string
}

export type ProductAction =
    SetProductsAction |
    AddProductAction |
    RemoveProductAction |
    SetSelectedProductAction |
    SetSortAction |
    SetFilterAction |
    SetShowAmountAction |
    SetCatalogPageAction |
    SetLayoutAction |
    SetSearchAction