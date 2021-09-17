// Works tabel

export interface BaseDatabaseWorksList {
  title: string
  description: string
  cover: string
  createdAt: string
  content: string
}

export interface BaseDatabaseWorks {
  [key: string]: BaseDatabaseWorksList[]
}


// Admin tabel

export interface BaseDatabaseAdminDomain {
  [key: number]: string
}

export interface BaseDatabaseAdminList {
  domain: BaseDatabaseAdminDomain[]
}

export interface BaseDatabaseAdmin {
  [key: string]: BaseDatabaseAdminList
}

export interface BaseDatabase {
  admin: BaseDatabaseAdmin[]

  works: BaseDatabaseWorks[]
}