var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'PHP',
        coin: 0
    },
    {
        id: 3,
        name: 'Java',
        coin: 250
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 5,
        name: 'Java',
        coin: 25
    }

]

var newCourses = courses.map(function (Giá,index) {
    return {
        id: course.id,
        name: `Khóa học ${course.name}`,
        coin: course.coin,
        coinText :` : ${course.coin}`,
        index: index

    }
} );
// biến newCourses sẽ nhận về 1 array
console.log(newCourses);