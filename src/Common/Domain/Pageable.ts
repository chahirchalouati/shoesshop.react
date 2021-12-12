export interface Sort {
    empty: boolean,
    sorted: boolean,
    unsorted: boolean
};

export interface Pageable {
    sort: Sort,
    offset: number,
    pageNumber: number,
    pageSize: number,
    unpaged: boolean,
    paged: boolean
};

export interface ResponsePageable<T> {
    content: Array<T>;
    pageable: Pageable,
    last: boolean,
    totalPages: number,
    totalElements: number,
    size: number,
    number: number,
    sort: Sort,
    first: boolean,
    numberOfElements: number,
    empty: boolean
}

export interface RequestPageable<T> {

}