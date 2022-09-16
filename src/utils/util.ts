import moment from 'moment';

const transformLanguage = (str: string) => {
	str = str.toLowerCase();
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
	str = str.replace(/đ/g, 'd');
	str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
	str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
	str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
	str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
	str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
	str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
	str = str.replace(/Đ/g, 'D');
	return str;
};

const transformDate = (date: Date) => {
	return moment(date).format('Do MMMM YYYY');
};

const mapOriginValueToFormInput = (key: string, originValue: string) => {
	let value: any = 'Not Provided';
	let inputType = 'text';

	if (typeof originValue === 'boolean') {
		value = originValue;
		inputType = 'checkbox';
	} else if (key === 'birthday') {
		value = new Date(originValue).toISOString().substring(0, 10);
		inputType = 'date';
	} else if (typeof originValue === 'number') {
		value = 0;
		inputType = 'number';
	} else if (typeof originValue === 'string') {
		console.log(
			'🚀 ~ file: util.ts ~ line 37 ~ mapOriginValueToFormInput ~ originValue',
			originValue
		);
		console.log(key);

		value = originValue ? originValue : 'Not Provided';
	}

	return { value, inputType };
};

export { transformLanguage, transformDate, mapOriginValueToFormInput };

// let value;
// 						let inputType = '';

// 						if (typeof data[key] === 'boolean') {
// 							value = data[key];
// 							inputType = 'checkbox';
// 						} else if (typeof data[key] === 'number') {
// 							value = data[key] ? data[key] : 0;
// 							inputType = 'number';
// 						} else if (typeof data[key] === 'string') {
// 							value = data[key] ? data[key] : 'Not Provided';
// 							inputType = 'text';
// 						}

// 						if (key === 'birthday') {
// 							value = new Date(data[key]).toISOString().substring(0, 10);
// 							inputType = 'date';
// 						}
