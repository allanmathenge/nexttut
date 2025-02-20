
import ListItem from "./ListItems"

interface List {
    list: ListItem[]
    load(): void
    save(): void
    clearList(): void
    addItem(itemObj: ListItem): void
    removeItem(id: string): void
}

export default class FullList implements List {

    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = []){}

    get list(): ListItem[] {
        return this._list
    }

    // Load method
    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return

        const parsedList: { _id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
    }

    // save method
    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    // clear list method
    clearList(): void {
        this._list = []
        this.save()
    }

    // add item method
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    // delete method
    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id )
        this.save()
    }
}