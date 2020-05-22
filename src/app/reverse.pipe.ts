import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
	name: 'reversestring'
})
export class ReversePipe implements PipeTransform{
	transform(value: any) {
		return value.split("").reverse().join("");
	}
}