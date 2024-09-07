import { AbstractControl } from "@angular/forms";

export class CustomValidator{
    static noSpaceAllowed(control:AbstractControl)
    {
        if((control.value as string).indexOf(' ')>=0)
        {
            return{noSpaceAllowed:true}
        }
        return null;
    }
}