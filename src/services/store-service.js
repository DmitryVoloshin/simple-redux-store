

export default class PhoneStoreService{

    data =[
        {
            id:1,
            model:"iPhone6",
            memory:"64gb",
            price:499,
            pic:'https://hotline.ua/img/tx/158/158140558_s265.jpg'
        },
        {
           id:2,
           model:"iPhone7",
           memory:"128gb",
           price:699,
           pic:'http://www.three.co.uk/static/images/device_pages/MobileVersion/Apple/iPhone_7/Black/carousel/2.jpg'
        },
        {
            id:3,
            model:"iPhone7",
            memory:"256gb",
            price:799,
            pic:'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/a/p/apple-iphone-7-128-gb-oro-rosa-libre-0190198069610.jpg'
        }
    ];
    getPhones(){
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                if(Math.random() > 0.75){
                    reject(new Error('something bad happened'))
                }else{
                    resolve(this.data)
                }
             
            }, 700)
        })
    }
}