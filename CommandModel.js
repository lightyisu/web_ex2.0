var fileActions = new FileActions();
var EditActions = new EditActions();
var InsertACtions = new InsertACtions();
var HelpActions = new HelpActions();

var appMenuBar = new MenuBar();
//-----------
var fileMenu = new Menu('File');
var openCommand = new MenuCommand(fileActions.open);
var closeCommand = new MenuCommand(fileActions.close);
var saveCommand = new MenuCommand(fileActions.save);
var saveAsCommand = new MenuCommand(fileActions.saveAs);

fileMenu.add(new MenuItem('open', openCommand));
fileMenu.add(new MenuItem('Close', closeCommand));
fileMenu.add(new MenuItem('Save', saveCommand));
fileMenu.add(new MenuItem('Close', saveAsCommand));

appMenuBar.add(fileMenu);
//--------------
var editMenu = new Menu('Edit');
var cutCommand = new MenuCommand(EditActions.cut);
var copyCommand = new MenuCommand(EditActions.copy);
var pasteCommand = new MenuCommand(EditActions.paste);
var deleteCommand = new MenuCommand(EditActions.delete);

editMenu.add(new MenuItem('Cut', cutCommand));
editMenu.add(new MenuItem('Copy', copyCommand));
editMenu.add(new MenuItem('Paste', pasteCommand));
editMenu.add(new MenuItem('Delete', deleteCommand));

appMenuBar.add(editMenu);

//------------
var insertMenu = new Menu('Insert');
var textBlockCommand = new MenuCommand(InsertACtions.textBlock);
insertMenu.add(new MenuItem('Text  Block', textBlockCommand));
appMenuBar.add(insertMenu);

//------------
var helpMenu = new Menu('Help');
var showHelpCommand = new MenuCommand(HelpActions.showHelp());
helpMenu.add(new MenuItem('Show Help', showHelpCommand));
appMenuBar.add(helpMenu);

document.getElementsByTagName('body')[0].appendChild(appMenuBar.getElement());
appMenuBar.show();