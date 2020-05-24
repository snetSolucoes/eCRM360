const fieldtypes = [{
	type: 'Uitype',
	values: {
		1: '1 (A single line text field)',
		2: '2 (Text mandatory field)',
		3: '3 (AutoGenerated AccessKey in Users module)',
		4: '4 (An non-editable single line text field)',
		5: '5 (Date field)',
		6: '6 (Time and date field)',
		7: '7 (A single line text field which is used to take numeric input primarily)',
		8: '8 (Internal field that holds a list of emails)',
		9: '9 (A single line text field which is used to accept percentage inputs)',
		10: '10 (To create an input type of "Linked Entity")',
		11: '11 (Phone and fax)',
		12: '12 (Email id field)',
		13: '13 (A single line text field)',
		14: '14 (Time)',
		15: '15 (A dropdown combo)',
		16: '16 (A dropdown combo)',
	}
},
{
	type: 'Readonly',
	values: {
		0: 'No',
		1: 'Yes',
	}
},
{
	type: 'Presence',
	values: {
		0: 'Always active',
		1: 'Inactive',
		2: 'Active and editable',
	}
},
{
	type: 'Typeofdata',
	values: {
		'C~O':'C~O',
		'DT~M~time_start':'DT~M~time_start',
		'DT~M~time_start~Time Start':'DT~M~time_start~Time Start',
		'D~M':'D~M',
		'D~M~OTH~GE~date_start~Start':'D~M~OTH~GE~date_start~Start',
		'D~O':'D~O',
		'D~O~OTH~GE~sales_start_date~Sales':'D~O~OTH~GE~sales_start_date~Sales',
		'D~O~OTH~GE~start_date~Start':'D~O~OTH~GE~start_date~Start',
		'D~O~OTH~GE~support_start_date~Support':'D~O~OTH~GE~support_start_date~Support',
		'D~O~OTH~G~start_period~Start Period':'D~O~OTH~G~start_period~Start Period',
		'E~M':'E~M',
		'E~O':'E~O',
		'I~M':'I~M',
		'I~O':'I~O',
		'NN~O':'NN~O',
		'N~M':'N~M',
		'N~O':'N~O',
		'N~O~10,2':'N~O~10,2',
		'N~O~2,2':'N~O~2,2',
		'N~O~2~2':'N~O~2~2',
		'O~O':'O~O',
		'P~M':'P~M',
		'T~M':'T~M',
		'T~O':'T~O',
		'V~M':'V~M',
		'V~O':'V~O',
		'V~O~LE~150':'V~O~LE~150',
		'V~O~LE~16':'V~O~LE~16',
		'V~O~LE~25':'V~O~LE~25',
		'V~O~LE~4':'V~O~LE~4',
		'V~O~LE~9':'V~O~LE~9',
	}
},
{
	type: 'Quickcreate',
	values: {
		0: 'Is always shown and cannot be deactivated',
		1: 'Is not shown but can be set',
		2: 'Is shown but can be unset',
		3: 'Is never shown and cannot be activated',
	}
},
{
	type: 'Displaytype',
	values: {
		1: 'Displayed both in Detail view and Edit view',
		2: 'Displayed only in the Detail view',
		3: 'It is not displayed either in DetailView nor EditView',
		4: 'A Read-Only field that can be modified with workflows',
		5: 'Only in create mode',
	}
},
{
	type: 'Masseditable',
	values: {
		0: 'Is blocked non editable',
		1: 'Is mass editable',
		2: 'Is disabled mass editable but can be enabled',
	}
}];

const textfields = [
	'fieldname',
	'columnname',
	'generatedtype',
	'fieldlabel',
	'maximumlength',
	'entityidentifier',
	'entityidfield',
	'entityidcolumn',
	'relatedmodules',
	'sequence'
];

const setdefaultOption = [{
	false: 'No',
	true: 'Yes',
}];