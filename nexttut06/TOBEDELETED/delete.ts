import { NextResponse } from "next/server"

const DATA_SOURCE_URL = 'https:jsonplaceholder.typicode.com/todos'
const API_KEY: string = process.env.DATA_API_KEY as string

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)

    const todos:Todo = await res.json()

    return NextResponse.json(todos)
}

export async function PUT(request: Request) {
    const { userId, id, title, completed } = await request.json()

    if (!userId || !id || !title || typeof(completed) !== 'boolean') return NextResponse.json({
        'message': 'All fields are required'
    })

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': API_KEY,
        },
        body: JSON.stringify({
            userId, title, completed
        })
    })
    const updatedTodo: Todo = await res.json()

    return NextResponse.json(updatedTodo)
}

export async function DELETE(request: Request) {
    const { id }: Partial<Todo> = await request.json()
     if (!id) return NextResponse.json({
        'message': 'The item id is required'
    })
    
    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': API_KEY,
        }
    })
    return NextResponse.json({
        'message': 'Delete successful'
    })
}

export async function POST(request: Request) {
    const { userId, id, title, completed }: Partial<Todo> = await request.json()

    if (!userId || !id || !title || typeof(completed) !== 'boolean') return NextResponse.json({
        'message': 'All fields are required'
    })
    const res = await fetch(DATA_SOURCE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': API_KEY,
        },
        body: JSON.stringify({
            userId, title, completed
        })
    })
    const newTodo: Todo = await res.json()
    return NextResponse.json(newTodo)
}

// DYNAMIC ROUTES

export async function GET(request: Request) {
    const id = request.urk.slice(request.url.lastIndexOf('/') + 1)
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)
    const todo: Todo = await res.json()
    if (!todo.id) return NextResponse.json({ 'message': 'Todo id not found'})
    return NextResponse.json(todo)
}
