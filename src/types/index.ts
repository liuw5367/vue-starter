import type { ColumnType } from 'ant-design-vue/es/table'

export interface MenuItem {
  title: string
  link: string
  key: string
  icon: string
  disabled?: boolean
  permission?: string

  children?: MenuItem[]
}

export interface TablePagination {
  current: number
  pageSize: number
  total: number
}

export interface TableSorter {
  field?: string
  order?: 'ascend' | 'descend'
}

export type TableColumns<T extends Record<string, any>> = Array<
  { dataIndex: 'columnActions' | keyof T } & ColumnType<T>
>

export interface LabelValueItem<T = any> {
  label: string
  value: T

  children?: LabelValueItem<T>[]
  disabled?: boolean
  [key: string]: any
}

/**
 * 获取 Promise 方法返回类型
 * 例：
 * const a: PromiseReturnType<type fn> = yield call(fn, args);
 */
export type PromiseReturnType<S extends Function> = S extends (...args: any[]) => Promise<infer R> ? R : never

export type PromiseType<T> = T extends Promise<infer R> ? R : T

export type FuncReturnType<S extends Function> = S extends (...args: any[]) => Promise<infer R>
  ? R
  : S extends (...args: any[]) => infer R
    ? R
    : never

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
}

export type DeepPartial<T> = T extends Record<string, any>
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T

export type ValueOf<T> = T[keyof T]

export interface Point {
  x: number
  y: number
}
