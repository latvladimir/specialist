const items = [
    {
        uid: 234234,
        title: 'Tovar1',
        qty: 2,
        price: 1000,
    },
    {
        uid: 223234,
        title: 'Tovar2',
        qty: 5,
        price: 500,
    }
]

function draw(items) {

    const table = document.querySelector('table')
    table.innerHTML = `<tr>
        <td>#п/п</td>
        <td>Название товара</td>
        <td>Количество</td>
        <td>Цена за ед.</td>
        <td>Всего</td>
        <td> </td>
    </tr>`
    
    
    
        let itogSumma = 0
    items.forEach(item => {
        console.log(table)
        const newItem = document.createElement('tr')
        newItem.innerHTML = ` <td>${item.uid}</td>
        <td>${item.title}</td>
        <td>
            <button id='minus'>-</button>
            <input type="text" value="${item.qty}">
            <button id='plus'>+</button>
        </td>
        <td>${item.price}</td>
        <td>${item.qty * item.price}</td>
        <td><a href="#">Удалить</a></td>`

        const aRemove = newItem.querySelector('a')
        aRemove.addEventListener('click', () => {
            const removeIndex = items.findIndex(it => it.uid === item.uid )
            items.splice(removeIndex, 1)
            table.innerHTML = ''

            draw(items)
        })

        
        const buttonM = newItem.querySelector('#minus')
        buttonM.addEventListener('click', () => {
            if (item.qty === 0) return
            item.qty -= 1
            table.innerHTML = ''

            draw(items)
        })

        const buttonP = newItem.querySelector('#plus')
        buttonP.addEventListener('click', () => {
            item.qty += 1
            table.innerHTML = ''

            draw(items)
        })

        const input = newItem.querySelector('input')
        input.addEventListener('change', () => {
            item.qty = input.value
            table.innerHTML = ''

            draw(items)
        })


        table.appendChild(newItem)

        itogSumma += item.qty * item.price
    })

    const itog = document.createElement('tr')
    itog.innerHTML = `<td colspan="4">Итого:</td>
        <td colspan="2">${itogSumma}</td>`
    table.appendChild(itog)

   
}

draw(items)
