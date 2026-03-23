[Setup]
AppName=Flappy Kids Academy
AppVersion=1.0.0
DefaultDirName={autopf}\Flappy Kids Academy
DefaultGroupName=Flappy Kids Academy
OutputDir=.\output
OutputBaseFilename=flappy-kids-windows-installer
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Files]
Source: "..\dist\windows-portable\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{group}\Flappy Kids Academy"; Filename: "{app}\FlappyKidsLauncher.bat"
Name: "{commondesktop}\Flappy Kids Academy"; Filename: "{app}\FlappyKidsLauncher.bat"

[Run]
Filename: "{app}\FlappyKidsLauncher.bat"; Description: "Abrir Flappy Kids Academy"; Flags: nowait postinstall skipifsilent
