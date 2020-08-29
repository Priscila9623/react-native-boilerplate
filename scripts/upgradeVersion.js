const {replaceData} = require('./util');

const ora = require('ora');

const upgradeVersion = (()=>{

	const _upgradeVersionName = (versionName, level) => {
		const arrVer = versionName.split('.');
		if (arrVer.length !== 3)
		{return '0.0.1';}

		switch (level){
		case 'l1':
			arrVer[0] = +arrVer[0] + 1;
			arrVer[1] = 0;
			arrVer[2] = 0;
			return arrVer.join('.');
		case 'l2':
			arrVer[1] = +arrVer[1] + 1;
			arrVer[2] = 0;
			return arrVer.join('.');
		case 'l3':
			arrVer[2] = +arrVer[2] + 1;
			return arrVer.join('.');
		}
	};

	const _upgrade = async (level)=>{
		const spinner = ora(`Actualizando version`);
		try {
			const {versionCode, versionName} = require('./app/config/general');

			const newVersionName = _upgradeVersionName(versionName, level);
			const newVersionCode = versionCode + 1;

			const resGeneral = replaceData({
				path:'app/config/general.js',
				contenido:[
					{
						oldText:`versionCode: ${versionCode}`,
						newText:`versionCode: ${newVersionCode}`,
					},
					{
						oldText:`versionName: '${versionName}'`,
						newText:`versionName: '${newVersionName}'`,
					},

				],
			});

			const resBuildGraddleApp = replaceData({
				path:'android/app/build.gradle',
				contenido:[
					{
						oldText:`versionCode ${versionCode}`,
						newText:`versionCode ${newVersionCode}`,
					},
					{
						oldText:`versionName "${versionName}"`,
						newText:`versionName "${newVersionName}"`,
					},

				],
			});

			await Promise.all([resBuildGraddleApp, resGeneral]);

			spinner.succeed();
			console.log('Version anterior :', versionName);
			console.log('Version actual :', newVersionName);

		} catch (error) {
			spinner.fail();
			console.log('\n\nerror :', error);
			process.exit();
		}
	};



	const main = async ()=>{
		const level = process.argv[2];

		if (level !== 'l1' && level !== 'l2' && level !== 'l3'){
			ora('Ingrese un nivel valido ej.: l1 - l2 -  l3').fail();
			return process.exit();
		}

		await _upgrade(level);
	};

	return {main};
})();

upgradeVersion.main();

