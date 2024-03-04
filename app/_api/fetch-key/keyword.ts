const keywordKey = {
  all: () => "keywordGroup",
  list: () => keywordKey.all() + "List",
  detail: (id: number) => keywordKey.all() + "Detail" + "_" + id,
}

export default keywordKey
