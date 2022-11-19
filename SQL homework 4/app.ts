const express = require("express")
const app = express()
const { join } = require("path")
const mysql = require('mysql')

import { json } from "body-parser"
import { request, Request, Response } from "express"

const port = 3000

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.set("views", join(__dirname, "views"));
app.set("view engien", "ejs");
app.use(express.static(join(__dirname, "public")));

const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "sqlhw4",
    multipleStatements: true,
})
Error.stackTraceLimit = Infinity;
app.use(express.static("."));
// array of product objects for database
// const productsArr=[
//     {
//     sku: Math.floor(100000 + Math.random() * 100000),
//     manufacturer: "Stokke",
//     name: 'עגלת XPLORY SIGNATURE',
//     description: `Stokke® Xplory®  בצבע שחור סיגנצ’ר היא העגלה הנחשקת בקרב אמהות רבות בעולם – היא כל מה שאפשר לבקש מעגלה : מצד אחד שיא הפונקציונליות, מצד שני – שיא הסטייל. טרנדית, אבל גם טיימלס שתתגלגל איתכם שנים קדימה. יוקרה סקנדינבית במיטבה!

// מהדורה מוגבלת – שמציגה עיצוב וצבעים שלא יחזרו למלאי.

// זו הבחירה המושלמת להורים שרוצים את הטוב ביותר עבור התינוק שלהם מבלי להתפשר על בטיחות, איכות או סגנון. עגלה שהיא כולה פרימיום מלמעלה למטה. עגלה מעוצבת בעיצוב סקנדינבי חדשני בשילוב חומרים איכותיים הופכים את הטיול לקל פשוט וללא מאמץ או תמרון. עיצוב העגלה גבוה ובכך שומר על קשר עין שוטף עם התינוק -ומאפשר קרבה וחיבור – מעניק בטחון לכם ולבייבי שלכם.`,
//     minAge: 0,
//     maxAge: 5
//   },
//     {
//     sku: Math.floor(100000 + Math.random() * 100000),
//     manufacturer: "סגל בייבי",
//     name: 'מיטת ריי שחור-טבעי',
//     description: `מיטת ריי שחורה עוצבה מתוך ההבנה כי ריהוט שחור נכנס ללב הבית, ועכשיו גם לחדר התינוק. זוהי מיטה קלאסית רחבה במיוחד שמעניקה לעיצוב החדר דומננטיות שקטה. המיטה עשויה עץ בוק מלא עמיד וחזק, מיוצרת באיטליה ולה אישור תקן ו אישור בינלאומי Greenguard – המבטיח מיטה ללא רעלים.
// המיטה עוצבה מתוך חקירה והבנה של צוות המומחים שלנו שלמדו לשלב באופן מדויק בין הצרכים של התינוק ההורים והטרנדים העדכניים בתחום.
// ניתן להפוך את המיטה בקלות למיטת מעבר על ידי הרכבה של מעקה במקום אחת מהפאות הרחבות.`,
//     minAge: 0,
//     maxAge: 3
// },
//     {
//     sku: Math.floor(100000 + Math.random() * 100000),
//     manufacturer: "סגל בייבי",
//     name: 'שידה רומי',
//     description: `צבע גוף: לבן בשילוב עץ בוק
// צבע חזיתות: לבן
// חומר: MDF מלא איכותי וחזק (כולל פנים המגירות)
// גימור: אולטרא גלוס כולל ידיות עור ייחודיות ורגלי עץ בוק מעוצבות.
// יציבות מלאה: מוט פלדה מחושלת לחיזוק מבנה השידה לטווח ארוך.
// תאור : השידה מתאימה לאחסון מסודר של בגדי וחפצי התינוק לאורך זמן, הודות לגודל המגירות`,
//     minAge: 0,
//     maxAge: 99
// },
//     {
//     sku: Math.floor(100000 + Math.random() * 100000),
//     manufacturer: "סגל בייבי",
//     name: 'ארון אודם',
//     description: `ארון הוא פריט משמעותי בחדר ולכן המשימה של המעצבים שלנו היתה לפתח ארון גדול ולא מאיים – ואכן ניתן לראות כי העיצוב המינימסליטי מצליח לשמור על נינוחות ולהשאיר את החדר מאוורר. ארון שוהם עם 4 דלתות מעוצב כך שניתן להשתמש בו ל 2 ילדים ולהעניק סמטריה מושלמת בו זמנית. הפשטות הנקייה של הארון בשילוב ידיות לבנות נוחות המשתלבות בשקט מייצרות עיצוב עכשווי על זמני. העיצוב לא מעמיס ומעניק לפשטות יתרון בולט.הארון מתאים לסגנונות עיצוב רבים והוא מתוכנן בצורה חכמה. סידור הארון הפנימי גמיש וניתן להתאים אותו לצרכים המתפתחים של התינוק וההורים.`,
//     minAge: 0,
//     maxAge: 99
// }
// ]
// end of array of product objects for database

// array of user objects

// const usersArr = [
//     {
//         name: "רום בורלא",
//         phone: "0507273518",
//         otherPhone: '',
//         streetAddress: "שדרות ירושלים",
//         houseNum: "40",
//         apartement_num: '4',
//         city: 'חולון'
//     },
//     {
//         name: "אבי בוזגלו",
//         phone: "0523334897",
//         otherPhone: '0501234567',
//         streetAddress: "אבו חצירא",
//         houseNum: "8 א'",
//         apartement_num: '',
//         city: 'קריית מלאכי' 
//     },
//     {
//         name: "אלדר אברמוביץ'",
//         phone: '0527425389',
//         otherPhone: '0549876543',
//         streetAddress: "אביתר הכהן",
//         houseNum: "10",
//         apartement_num: "20",
//         city: "באר שבע"
//     },
// ]

// end of array of user objects

// array of child objects
// const childArr=[
//     {
//         name: 'אינשם',
//         age: '0.5',
//         user_id: 5
// },
//   {
//         name: 'שלמה',
//         age: '3',
//         user_id: 6
// },
//  {
//         name: "אבי ג'וניור",
//         age: '1',
//         user_id: 6
// },
//  {
//         name: 'בני',
//         age: '5',
//         user_id: 7
// },
//  {
//         name: 'מאיה',
//         age: '7',
//         user_id: 7
// },
//  {
//         name: 'סיוון',
//         age: '2',
//         user_id: 7
// }
// ]
// end of array of child objects

// dev insert manually into database function
// let insert = `INSERT INTO \`child_age\`(\`name\`, \`age\`, \`user_id\`) VALUES `
// let values = ''

// childArr.forEach((child,index)=>{
//  let sign = index === childArr.length - 1?';':',';
//  values+=`("${child.name}", ${child.age}, ${child.user_id})${sign}`
// })

// let builtQuery = insert + values;

// let insertChild = () => {
//    connection.query(builtQuery,(err = Error, result = String)=>{
//         if(err) console.log(err);
//         console.log(result);            
//    })
// }
// insertChild()
// end dev insert manually into database function


app.get('/customer-club', async (req:Request,res:Response)=>{
    let query = `SELECT * FROM products`
    await connection.query(query,(err:Error,result:Array<Object>)=>{
        res.render("index.ejs",{result})
    })
})

app.get('/registration', (req:Request,res:Response)=>{
        res.render('registration.ejs')

})

// redirect by phone
app.post('/getCustPhone', async(req:Request,res:Response)=>{
    let phoneInp=req.body.phoneInp
        connection.query(`SELECT * FROM \`users\` JOIN child_age ON child_age.user_id=users.id WHERE \`phone\`= ?`,[phoneInp.toString()],(err:Error,result:Array<Object>)=>{
        if(err)throw err;
        if(result.length>0){
        app.get("/customer-club/"+phoneInp+"/children", async(req:Request,res:Response)=>{
            await connection.query(`SELECT * FROM \`users\` JOIN child_age ON child_age.user_id=users.id WHERE \`phone\`= ?`,[phoneInp.toString()],(err:Error,result:Array<Object>)=>{
                res.render("customer-w-children.ejs",{result})
            })
        })
        res.redirect("/customer-club/"+phoneInp+"/children")
    }else if(result.length===0){
        app.get("/customer-club/"+phoneInp, async(req:Request,res:Response)=>{
        await connection.query(`SELECT * FROM \`users\` WHERE \`phone\`= ?`,[phoneInp.toString()],(err:Error,result:Array<Object>)=>{
        if(err)throw err;
        if(result.length>0){
        res.render("customer.ejs",{result})
    }else{
        res.redirect("/registration")
    }
    })
})
res.redirect("/customer-club/"+phoneInp)
}
})
})


// user registration
app.post('/registration', (req:Request,res:Response)=>{
    let {name,phone,otherPhone,street,houseNum,apartementNum,city}=req.body
    let query = `INSERT INTO \`users\`( \`name\`, \`phone\`, \`other_phone\`, \`str_address\`, \`house_num\`, \`apartement_num\`, \`city\`) VALUES("${name}","${phone}","${otherPhone}","${street}","${houseNum}","${apartementNum}", "${city}")`
    connection.query(query,(err:Error,result:Array<Object>)=>{
        if(err)console.log(err);
        res.redirect(`/customer-club`)
    })
})

// register new child
app.post('/childReg',(req:Request,res:Response)=>{
    let {childName,childAge,user_id}=req.body
    let query = `INSERT INTO \`child_age\`(\`child_name\`, \`age\`, \`user_id\`) VALUES("${childName}",${childAge},${user_id})`
    connection.query(query,(err:Error,result:Array<Object>)=>{
        if(err)console.log(err);
        let query = `SELECT * FROM users JOIN child_age ON users.id = child_age.child_id`
        connection.query(query,(err:Error,result:Array<Object>)=>{
            res.redirect('back')
        })
    })
})

app.listen(port,(err:Error)=>{
    if (err){console.log(err)};
    console.log('listening to port ' + port);
})