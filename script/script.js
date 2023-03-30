// Создайте массив clients для хранения информации о клиентах интернет-магазина:
var clientsArr = [
    {
        firstName: 'Александр',
        lastName: 'Иванчук',
        date: '11-29-1990',
        phone: '8 (929) 988-90-09',
        amounts: [2546, 2098, 764, 7266]
    },
    {
        firstName: 'Анатолий',
        lastName: 'Стаценко',
        date: '02-12-1987',
        phone: null,
        amounts: [563, 8287, 889]
    },
    {
        firstName: 'Марина',
        lastName: 'Петрова',
        date: '07-26-1997',
        phone: '8 (899) 546-09-08',
        amounts: [6525, 837, 1283, 392]
    },
    {
        firstName: 'Иван',
        lastName: 'Караванов',
        date: '09-12-1999',
        phone: null,
        amounts: [7634, 283, 9823, 3902]
    },
    {
        firstName: 'Оксана',
        lastName: "Абрамова",
        date: '01-24-2002',
        phone: "8 (952) 746-99-22",
        amounts: [342, 766, 362]
    }]

// 1. Создайте пустой объект newClient.

let newClient = {};

// 2. Запросите у пользователя по порядку все данные о клиенте - имя, фамилию, дату рождения, телефон.
// При запросе данных сохраняйте их в соответствующие свойства объекта newClient - firstName, lastName, date, phone.
// Дату запросите в формате мм-дд-гггг (месяц-день-год).

newClient.firstName = prompt('Введите имя клиента:');
newClient.lastName = prompt('Введите фамилию клиента:');
newClient.date = prompt('Введите дату рождения клиента в формате мм-дд-гггг:');
newClient.phone = prompt('Введите телефон клиента:');

console.log(newClient);

// 3. В качестве свойства amounts для объекта newClient установите пустой массив.

newClient.amounts = [];

// 4. Затем создайте цикл while, который будет работать следующим образом: пока пользователь отвечает «ОК»
// на вопрос «Добавить покупку для клиента X?» (где X - имя клиента из объекта newClient),
// программа должна запрашивать сумму покупки и добавлять ее в массив amounts объекта newClient.
// Соответственно, если пользователь нажмет «Отмена», программа должна прекратить выполнение цикла.

while (true) {
    const addPurchase = confirm(`Добавить покупку для клиента ${newClient.firstName}?`);
    if (!addPurchase) {
        break;
    }
    const purchaseAmount = parseFloat(prompt('Введите сумму покупки:'));
    newClient.amounts.push(purchaseAmount);
}

// 5. Добавьте получившийся объект newClient в массив clients
clientsArr.push(newClient);
console.log(clientsArr);

// 1. Создайте функцию fullName, которая принимает объект и возвращает имя и фамилию в одной строке – «Иван Иванов».
// Проверить функцию можно вызвав ее для первого объекта и получив имя и фамилию первого клиента.

function fullName(client) {
    return `${client.firstName} ${client.lastName}`;
}

console.log(fullName(clientsArr[0]));

// 2. Создайте функцию getBirthday, которая на основе даты рождения клиента выдает строку в нужном формате: «1 мая» или «1 мая (сегодня)».
// Описание функции:- Принимает строку (не объект) с датой рождения в формате мм-дд-гггг
// - Преобразует полученную строку в объект типа new Date, и с помощью функции toLocaleString этого объекта формирует строку в формате «число месяц» (к примеру: «14 января», «23 марта»).
// - Проверяет, сегодня ли день рождения у клиента, если да, то добавляет в итоговую строку « (сегодня)». Для этого можно сравнить дни и месяцы в имеющихся объектах дат.
// - Возвращает из функции созданную строку
// Пример работы функции:В функцию попадает строка “07-01-2000”. Если сегодня 1 июля, то функция вернет строку «1 июля (сегодня)». Если же сегодня не 1 июля - функция вернет «1 июля».
// Проверить функцию можно вызвав ее для свойства даты первого объекта и получив отформатированную дату.

function getBirthday(birthdayString) {
    const birthday = new Date(birthdayString);
    const today = new Date();
    const birthdayFormatted = birthday.toLocaleString('ru', {day: 'numeric', month: 'long'});

    if (birthday.getMonth() === today.getMonth() && birthday.getDate() === today.getDate()) {
        return `${birthdayFormatted} (сегодня)`;
    } else {
        return birthdayFormatted;
    }
}

const firstClientBirthday = clientsArr[1].date;
const formattedBirthday = getBirthday(firstClientBirthday);
console.log(formattedBirthday);


function getAllAmount(amounts) {
    return amounts.reduce((sum, current) => sum + current, 0);
}

console.log(getAllAmount(clientsArr[0].amounts));

// 4. Создайте функцию getAverageAmount, которая принимает один параметр: массив чисел (суммы покупок). Функция должна посчитать среднее
// арифметическое всех значений. Помните про последовательность действий: сначала считаем сумму чисел, а после – делим на количество.
//  Возвращаемое число должно быть округлено до 1 числа после запятой с помощью конструкции number.toFixed(1), где number - ваша переменная с итоговым числом.
// Проверить функцию можно вызвав ее для свойства суммы покупок первого объекта и получив число – их среднее арифметическое.

function getAverageAmount(amounts) {
    const sum = amounts.reduce((acc, val) => acc + val, 0);
    const avg = sum / amounts.length;
    return avg.toFixed(1);
}

console.log(getAverageAmount(clientsArr[0].amounts));

// 5. Удалите все временные вызовы функций для проверок их результата.

// 6. Создайте стрелочную функцию в новую переменную - showClients. Функция должна принимать один параметр - главный массив клиентов
// clients и для каждого клиента (в цикле) выводить сообщение “Клиент X имеет среднюю сумму чека Y.
// День рождения клиента: D”, где X - значение результата функции fullName для текущего объекта клиента в цикле,
// Y - средний чек клиента на основе его покупок в массиве amounts из функции getAverageAmount,
// а D - дата рождения клиента из функции getBirthday. Помните о том, что внутри функции вам надо работать с переданным в неё массивом,
// а для каждого отдельного вызова других функций в цикле передавать соответствующее значение, используя конкретный объект по индексу.

function fullName(client) {
    return `${client.firstName} ${client.lastName}`;
}

const showClients = (clients) => {
    for (let i = 0; i < clients.length; i++) {
        const client = clients[i];
        const name = fullName(client);
        const avgAmount = getAverageAmount(client.amounts);
        const birthday = getBirthday(client.date);
        console.log(`Клиент ${name} имеет среднюю сумму чека ${Number(avgAmount).toFixed(1)}. День рождения клиента: ${birthday}`);
    }
};

showClients(clientsArr);
// 7. Вызовите функцию showClients для всего массива объектов клиентов clients. Проверьте вывод в консоль – вы должны получить информацию
// по каждому из имеющихся клиентов в объекте clients.
// showClients(clients);


// 8. Далее вызовите функцию showClients без параметров. Оберните этот вызов в обработчик ошибок.
// Результатом вызова без параметров должно стать сообщение “Вызвана функция без параметров” в консоли вместо ошибки.
// Вторым сообщением при обработке ошибки выведите текст ошибки из свойства message объекта ошибки.
//


try {showClients() } catch (error) {
 console.log(error);
}
// alert("test");

// 9. Создайте новый массив bestClients, заполните его 2-3 новыми клиентами и вызовите функцию
// showClients с этим массивом. Проверьте вывод информации о новых клиентах в консоль.
const bestClients = [
    {
        firstName: "Ирина",
        lastName: "Кузнецова",
        date: "2005-07-12",
        amounts: [2000, 5000, 10000, 15000],
    },
    {
        firstName: "Кристина",
        lastName: "Петрова",
        date: "1990-01-12",
        amounts: [1000, 3000, 5000, 10000],
    },
    {
        firstName: "Ольга",
        lastName: "Серько",
        date: "1988-02-09",
        amounts: [1500, 2500, 3000, 4000],
    },
];

showClients(bestClients);

// 10. Сделайте так, чтобы этот вызов функции был не сразу, а спустя 3 секунды.

setTimeout(() =>  {
    console.log(showClients(bestClients))
}, 3000);

// 11. Создайте функцию whoSpentMore, которая определит, кто из переданных клиентов потратил больше всех.
// Описание функции:
// - Принимает массив объектов клиентов
// - Перебирает каждого клиента и проверяет, больше ли его сумма покупок (с помощью функции getAllAmount), чем у другого клиента.
// - В конце функция должна вывести в консоль строку: «Больше всех потратил N. Сумма покупок: X.», где N - полное имя клиента (на основе функции fullName), а X - сумма покупок max.
// - В реализации функции используйте 2 дополнительные переменные, в которых будете сохранять самую большую сумму и найденный объект клиента с максимальной суммой.
//  Если в цикле находите сумму больше, чем уже была сохранена вами в переменную максимальной суммы – обновляйте переменную суммы и объект, на основе которого по итогу вернете строку из функции.

function whoSpentMore(clients) {
    let maxSpent = 0;
    let maxSpender = null;

    for (let i = 0; i < clients.length; i++) {
        const client = clients[i];
        const spent = getAllAmount(client.amounts);

        if (spent > maxSpent) {
            maxSpent = spent;
            maxSpender = client;
        }
    }

    const fullName = `${maxSpender.firstName} ${maxSpender.lastName}`;
    console.log(`Больше всех потратил ${fullName}. Сумма покупок: ${maxSpent}.`);
}

whoSpentMore(bestClients);

whoSpentMore(clientsArr);