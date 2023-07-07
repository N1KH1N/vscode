interface OnInit{
    ngOnInit()
}

interface OnChange{
    ngOnChange()
}

class WeatherComponent  implements OnInit,OnChange{
    ngOnInit() {
        console.log("on init method");
        
    }
    ngOnChange() {
        console.log("on change methid");
        
    }
}