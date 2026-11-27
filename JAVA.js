(function () {
  'use strict';

  const storageKey = 'pocketcode.project.v1';
  const languageOptions = [
    ['Plain Text', 'txt'],
    ['ABAP', 'abap'], ['ActionScript', 'as'], ['Ada', 'ada'], ['Agda', 'agda'],
    ['ALGOL', 'alg'], ['Alice', 'alice'], ['Apex', 'cls'], ['APL', 'apl'],
    ['AppleScript', 'applescript'], ['Arc', 'arc'], ['Arduino', 'ino'],
    ['Assembly', 'asm'], ['AutoHotkey', 'ahk'], ['AutoIt', 'au3'], ['AWK', 'awk'],
    ['B', 'b'], ['Ballerina', 'bal'], ['Bash', 'sh'], ['BASIC', 'bas'],
    ['Batch', 'bat'], ['BCPL', 'bcpl'], ['Befunge', 'bf'], ['BlitzMax', 'bmx'],
    ['Boo', 'boo'], ['Brainfuck', 'brainfuck'], ['C', 'c'], ['C#', 'cs'],
    ['C++', 'cpp'], ['Carbon', 'carbon'], ['Ceylon', 'ceylon'], ['Chapel', 'chpl'],
    ['Clojure', 'clj'], ['CLU', 'clu'], ['COBOL', 'cob'], ['CoffeeScript', 'coffee'],
    ['ColdFusion', 'cfm'], ['Common Lisp', 'lisp'], ['Coq', 'v'], ['Crystal', 'cr'],
    ['CSS', 'css'], ['CUDA', 'cu'], ['Curl', 'curl'], ['Cython', 'pyx'],
    ['D', 'd'], ['Dart', 'dart'], ['Delphi', 'pas'], ['Dhall', 'dhall'],
    ['Dylan', 'dylan'], ['Eiffel', 'e'], ['Elixir', 'ex'], ['Elm', 'elm'],
    ['Emacs Lisp', 'el'], ['Erlang', 'erl'], ['Euphoria', 'euphoria'], ['F#', 'fs'],
    ['Factor', 'factor'], ['Falcon', 'fal'], ['Fantom', 'fan'], ['Forth', 'fth'],
    ['Fortran', 'f90'], ['FoxPro', 'prg'], ['GAMS', 'gms'], ['GDScript', 'gd'],
    ['GLSL', 'glsl'], ['Go', 'go'], ['Gosu', 'gs'], ['GraphQL', 'graphql'],
    ['Groovy', 'groovy'], ['Hack', 'hack'], ['Haskell', 'hs'], ['Haxe', 'hx'],
    ['HLSL', 'hlsl'], ['HTML', 'html'], ['HyperTalk', 'htalk'], ['Icon', 'icn'],
    ['IDL', 'idl'], ['Idris', 'idr'], ['Inform', 'inf'], ['Io', 'io'],
    ['J', 'j'], ['J#', 'jsharp'], ['JADE', 'jade'], ['Java', 'java'],
    ['JavaScript', 'js'], ['JScript', 'jscript'], ['Julia', 'jl'], ['Kotlin', 'kt'],
    ['LabVIEW', 'lvproj'], ['Ladder Logic', 'ld'], ['Lasso', 'lass'], ['Lean', 'lean'],
    ['Lisp', 'lisp'], ['LiveCode', 'livecode'], ['Logo', 'logo'], ['Lua', 'lua'],
    ['M4', 'm4'], ['Maple', 'mpl'], ['MATLAB', 'm'], ['Max', 'maxpat'],
    ['Mercury', 'mrc'], ['Miranda', 'mira'], ['ML', 'ml'], ['Modula-2', 'mod'],
    ['Modula-3', 'm3'], ['Mojo', 'mojo'], ['MUMPS', 'mumps'], ['Nemerle', 'n'],
    ['Nim', 'nim'], ['Nix', 'nix'], ['Objective-C', 'm'], ['OCaml', 'ml'],
    ['Occam', 'occ'], ['Odin', 'odin'], ['OpenCL', 'cl'], ['OpenEdge ABL', 'p'],
    ['Oz', 'oz'], ['Pascal', 'pas'], ['Perl', 'pl'], ['PHP', 'php'],
    ['PicoLisp', 'l'], ['Pike', 'pike'], ['PL/I', 'pli'], ['PL/SQL', 'pks'],
    ['Pony', 'pony'], ['PostScript', 'ps'], ['PowerShell', 'ps1'], ['Processing', 'pde'],
    ['Prolog', 'pro'], ['PureScript', 'purs'], ['Python', 'py'], ['Q', 'q'],
    ['Q#', 'qs'], ['R', 'r'], ['Racket', 'rkt'], ['Raku', 'raku'],
    ['REBOL', 'r'], ['Red', 'red'], ['Rexx', 'rex'], ['Ring', 'ring'],
    ['RPG', 'rpgle'], ['Ruby', 'rb'], ['Rust', 'rs'], ['SAS', 'sas'],
    ['Scala', 'scala'], ['Scheme', 'scm'], ['Scratch', 'sb3'], ['Sed', 'sed'],
    ['Seed7', 'sd7'], ['Self', 'self'], ['Shell', 'sh'], ['Simula', 'sim'],
    ['Smalltalk', 'st'], ['SNOBOL', 'sno'], ['Solidity', 'sol'], ['SPARK', 'sp'],
    ['SQL', 'sql'], ['Squirrel', 'nut'], ['Standard ML', 'sml'], ['Stata', 'do'],
    ['Swift', 'swift'], ['Tcl', 'tcl'], ['TeX', 'tex'], ['TypeScript', 'ts'],
    ['Vala', 'vala'], ['VBScript', 'vbs'], ['Verilog', 'v'], ['VHDL', 'vhd'],
    ['Vimscript', 'vim'], ['Visual Basic', 'vb'], ['Visual Basic .NET', 'vb'],
    ['WebAssembly', 'wasm'], ['Wolfram', 'wl'], ['X10', 'x10'], ['Xojo', 'xojo_code'],
    ['XQuery', 'xq'], ['XSLT', 'xslt'], ['Yacc', 'y'], ['Zig', 'zig']
  ];
  const extensionsByLanguage = {};
  languageOptions.forEach(function (option) {
    extensionsByLanguage[option[0]] = option[1];
  });
  const starterFiles = {
    'index.html': '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>My first page</title>\n</head>\n<body>\n  <main class="card">\n    <span class="spark">✦</span>\n    <p class="eyebrow">YOUR SPACE ON THE WEB</p>\n    <h1>Hello, <span>world.</span></h1>\n    <p class="intro">A little idea, made real. Change the code and press Run to see it here.</p>\n    <button id="helloButton">Try me</button>\n    <p id="message" aria-live="polite"></p>\n  </main>\n</body>\n</html>',
    'style.css': 'body {\n  min-height: 100vh;\n  margin: 0;\n  display: grid;\n  place-items: center;\n  background: #f4f3ed;\n  color: #202722;\n  font-family: system-ui, sans-serif;\n}\n.card {\n  position: relative;\n  width: min(390px, calc(100% - 48px));\n  padding: 38px;\n  border: 1px solid #e3e2d9;\n  border-radius: 20px;\n  background: white;\n  box-shadow: 0 18px 50px #20272212;\n}\n.spark { color: #4c946b; font-size: 25px; }\n.eyebrow { margin-top: 22px; color: #668170; font-size: 11px; letter-spacing: 1.5px; }\nh1 { margin: 8px 0; font-size: 42px; letter-spacing: -2px; }\nh1 span { color: #4c946b; }\n.intro { color: #68716b; line-height: 1.7; }\nbutton { margin-top: 12px; padding: 11px 17px; border: 0; border-radius: 8px; background: #315d43; color: white; font: inherit; cursor: pointer; }\n#message { min-height: 24px; color: #315d43; }',
    'script.js': 'document.getElementById("helloButton").addEventListener("click", function () {\n  document.getElementById("message").textContent = "Nice! Your JavaScript is working.";\n});'
  };

  const workbench = document.querySelector('.workbench');
  const sidebar = document.getElementById('fileSidebar');
  const filesElement = document.getElementById('fileList');
  const tabsElement = document.getElementById('tabs');
  const codeInput = document.getElementById('codeInput');
  const lineNumbers = document.getElementById('lineNumbers');
  const saveStatus = document.getElementById('saveStatus');
  const toast = document.getElementById('toast');
  const previewFrame = document.getElementById('previewFrame');
  const filesToggle = document.getElementById('filesToggle');
  const previewToggle = document.getElementById('previewToggle');
  const currentFileLabel = document.getElementById('currentFileLabel');
  const statusFile = document.getElementById('statusFile');
  const languageSelect = document.getElementById('languageSelect');
  const cursorPosition = document.getElementById('cursorPosition');
  const project = loadProject();
  let files = project.files;
  let fileLanguages = project.languages;
  let currentFile = Object.keys(files)[0] || 'index.html';
  let saveTimer;
  let toastTimer;

  if (!Object.prototype.hasOwnProperty.call(files, currentFile)) {
    files = Object.assign({}, starterFiles);
    currentFile = 'index.html';
    fileLanguages = {};
  }

  function loadProject() {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return { files: Object.assign({}, starterFiles), languages: {} };
      const parsed = JSON.parse(saved);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        return { files: Object.assign({}, starterFiles), languages: {} };
      }
      const sourceFiles = parsed.files && typeof parsed.files === 'object' && !Array.isArray(parsed.files)
        ? parsed.files
        : parsed;
      const sourceLanguages = parsed.languages && typeof parsed.languages === 'object' && !Array.isArray(parsed.languages)
        ? parsed.languages
        : {};
      const validFiles = {};
      Object.keys(sourceFiles).forEach(function (name) {
        if (typeof sourceFiles[name] === 'string') validFiles[name] = sourceFiles[name];
      });
      const validLanguages = {};
      Object.keys(sourceLanguages).forEach(function (name) {
        if (Object.prototype.hasOwnProperty.call(validFiles, name) &&
            Object.prototype.hasOwnProperty.call(extensionsByLanguage, sourceLanguages[name])) {
          validLanguages[name] = sourceLanguages[name];
        }
      });
      return Object.keys(validFiles).length
        ? { files: validFiles, languages: validLanguages }
        : { files: Object.assign({}, starterFiles), languages: {} };
    } catch (error) {
      console.error('Could not read the saved PocketCode project.', error);
      saveStatus.textContent = 'Using starter files';
      showToast('Saved project data could not be read. Opened the starter files instead.');
      return { files: Object.assign({}, starterFiles), languages: {} };
    }
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove('visible');
    }, 2300);
  }

  function saveFiles() {
    saveStatus.textContent = 'Saving…';
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(function () {
      try {
        localStorage.setItem(storageKey, JSON.stringify({ files: files, languages: fileLanguages }));
        saveStatus.textContent = 'Saved locally';
      } catch (error) {
        saveStatus.textContent = 'Save failed';
        showToast('Could not save in this browser. Download your file to keep a copy.');
      }
    }, 250);
  }

  function getExtension(name) {
    const dot = name.lastIndexOf('.');
    return dot < 0 ? '' : name.slice(dot + 1).toLowerCase();
  }

  function getLanguageForFile(name) {
    if (fileLanguages[name]) return fileLanguages[name];
    const extension = getExtension(name);
    const match = languageOptions.find(function (option) {
      return option[1] === extension;
    });
    return match ? match[0] : 'Plain Text';
  }

  function populateLanguageOptions() {
    languageOptions.forEach(function (language) {
      const option = document.createElement('option');
      option.value = language[0];
      option.textContent = language[0];
      languageSelect.appendChild(option);
    });
  }

  function getFileIconClass(name) {
    const extension = getExtension(name);
    return extension === 'css' ? 'css' : extension === 'js' ? 'js' : 'html';
  }

  function renderFileButtons() {
    filesElement.replaceChildren();
    Object.keys(files).forEach(function (name) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'file-item' + (name === currentFile ? ' active' : '');
      button.dataset.file = name;
      const icon = document.createElement('span');
      icon.className = 'file-icon ' + getFileIconClass(name);
      icon.textContent = getExtension(name) === 'css' ? '#' : getExtension(name) === 'js' ? 'JS' : '</>';
      const label = document.createElement('span');
      label.textContent = name;
      button.append(icon, label);
      filesElement.appendChild(button);
    });
  }

  function renderTabs() {
    tabsElement.replaceChildren();
    Object.keys(files).forEach(function (name) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'tab' + (name === currentFile ? ' active' : '');
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', String(name === currentFile));
      button.dataset.file = name;
      const icon = document.createElement('span');
      icon.className = 'file-icon ' + getFileIconClass(name);
      icon.textContent = getExtension(name) === 'css' ? '#' : getExtension(name) === 'js' ? 'JS' : '</>';
      const label = document.createElement('span');
      label.className = 'tab-name';
      label.textContent = name;
      button.append(icon, label);
      tabsElement.appendChild(button);
    });
  }

  function renderLineNumbers() {
    const count = codeInput.value.split('\n').length;
    lineNumbers.textContent = Array.from({ length: count }, function (_, index) {
      return index + 1;
    }).join('\n');
    lineNumbers.scrollTop = codeInput.scrollTop;
  }

  function selectFile(name) {
    if (!Object.prototype.hasOwnProperty.call(files, name)) return;
    currentFile = name;
    codeInput.value = files[name];
    currentFileLabel.textContent = name;
    statusFile.textContent = name;
    languageSelect.value = getLanguageForFile(name);
    renderLineNumbers();
    renderFileButtons();
    renderTabs();
    updateCursorPosition();
    if (window.matchMedia('(max-width: 760px)').matches) {
      sidebar.classList.remove('open');
      filesToggle.setAttribute('aria-expanded', 'false');
    }
  }

  function addStylesheet(documentToRender, source) {
    if (!source) return;
    const style = documentToRender.createElement('style');
    style.textContent = source;
    documentToRender.head.appendChild(style);
  }

  function encodeScript(source) {
    const bytes = new TextEncoder().encode(source);
    let binary = '';
    bytes.forEach(function (byte) { binary += String.fromCharCode(byte); });
    return window.btoa(binary);
  }

  function runPreview(showPreview) {
    const language = getLanguageForFile(currentFile);
    if (language !== 'HTML' && language !== 'CSS' && language !== 'JavaScript') {
      showToast(language + ' code can be edited and downloaded; Run preview supports HTML, CSS, and JavaScript.');
      return;
    }
    const htmlName = Object.keys(files).find(function (name) {
      return getExtension(name) === 'html';
    });
    if (!htmlName) {
      showToast('Add an .html file to create a preview.');
      return;
    }
    const parser = new DOMParser();
    const documentToRender = parser.parseFromString(files[htmlName], 'text/html');
    const cssName = Object.keys(files).find(function (name) { return getExtension(name) === 'css'; });
    const jsName = Object.keys(files).find(function (name) { return getExtension(name) === 'js'; });
    if (cssName) addStylesheet(documentToRender, files[cssName]);
    if (jsName && files[jsName]) {
      const encodedScript = encodeScript(files[jsName]);
      const script = documentToRender.createElement('script');
      script.textContent = 'try { (0, eval)(decodeURIComponent(Array.prototype.map.call(atob("' +
        encodedScript + '"), function (c) { return "%" + c.charCodeAt(0).toString(16).padStart(2, "0"); }).join(""))); } catch (error) { console.error(error); }';
      documentToRender.body.appendChild(script);
    }
    previewFrame.srcdoc = '<!doctype html>\n' + documentToRender.documentElement.outerHTML;
    if (showPreview && window.matchMedia('(max-width: 760px)').matches) {
      workbench.classList.add('preview-open');
      previewToggle.classList.add('selected');
    }
  }

  function updateCursorPosition() {
    const beforeCursor = codeInput.value.slice(0, codeInput.selectionStart);
    const lines = beforeCursor.split('\n');
    cursorPosition.textContent = 'Ln ' + lines.length + ', Col ' + (lines[lines.length - 1].length + 1);
  }

  function downloadCurrentFile() {
    const blob = new Blob([files[currentFile]], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = currentFile;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast('Downloaded ' + currentFile);
  }

  function addFile() {
    const name = window.prompt('New file name (for example: about.html):');
    if (name === null) return;
    const cleanName = name.trim();
    if (!cleanName || /[\\/:*?"<>|]/.test(cleanName)) {
      showToast('Enter a valid file name.');
      return;
    }
    if (Object.prototype.hasOwnProperty.call(files, cleanName)) {
      showToast('That file already exists.');
      return;
    }
    files[cleanName] = '';
    fileLanguages[cleanName] = getLanguageForFile(cleanName);
    saveFiles();
    selectFile(cleanName);
    showToast('Created ' + cleanName);
  }

  function changeLanguage() {
    const language = languageSelect.value;
    const extension = extensionsByLanguage[language];
    const dot = currentFile.lastIndexOf('.');
    const baseName = dot > 0 ? currentFile.slice(0, dot) : currentFile;
    const newName = baseName + '.' + extension;

    if (newName !== currentFile && Object.prototype.hasOwnProperty.call(files, newName)) {
      showToast('A file named ' + newName + ' already exists.');
      languageSelect.value = getLanguageForFile(currentFile);
      return;
    }
    if (newName !== currentFile) {
      const renamedFiles = {};
      Object.keys(files).forEach(function (name) {
        renamedFiles[name === currentFile ? newName : name] = files[name];
      });
      files = renamedFiles;
      delete fileLanguages[currentFile];
      currentFile = newName;
    }
    fileLanguages[currentFile] = language;
    saveFiles();
    selectFile(currentFile);
    showToast('Language set to ' + language + '.');
  }

  function deleteCurrentFile() {
    const names = Object.keys(files);
    if (names.length <= 1) {
      showToast('Keep at least one file in the project.');
      return;
    }
    if (!window.confirm('Delete ' + currentFile + ' from this browser project?')) return;
    delete files[currentFile];
    delete fileLanguages[currentFile];
    currentFile = Object.keys(files)[0];
    saveFiles();
    selectFile(currentFile);
    showToast('File deleted.');
  }

  codeInput.addEventListener('input', function () {
    files[currentFile] = codeInput.value;
    renderLineNumbers();
    saveFiles();
  });
  codeInput.addEventListener('scroll', renderLineNumbers);
  codeInput.addEventListener('click', updateCursorPosition);
  codeInput.addEventListener('keyup', updateCursorPosition);
  codeInput.addEventListener('select', updateCursorPosition);
  codeInput.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const start = codeInput.selectionStart;
      const end = codeInput.selectionEnd;
      codeInput.setRangeText('  ', start, end, 'end');
      codeInput.dispatchEvent(new Event('input', { bubbles: true }));
      updateCursorPosition();
    } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
      event.preventDefault();
      window.clearTimeout(saveTimer);
      try {
        localStorage.setItem(storageKey, JSON.stringify({ files: files, languages: fileLanguages }));
        saveStatus.textContent = 'Saved locally';
        showToast('Project saved in this browser.');
      } catch (error) {
        saveStatus.textContent = 'Save failed';
        showToast('Could not save in this browser.');
      }
    } else if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      runPreview(true);
    }
  });

  filesElement.addEventListener('click', function (event) {
    const button = event.target.closest('[data-file]');
    if (button) selectFile(button.dataset.file);
  });
  tabsElement.addEventListener('click', function (event) {
    const button = event.target.closest('[data-file]');
    if (button) selectFile(button.dataset.file);
  });
  filesToggle.addEventListener('click', function () {
    const isOpen = sidebar.classList.toggle('open');
    filesToggle.setAttribute('aria-expanded', String(isOpen));
    workbench.classList.remove('preview-open');
    previewToggle.classList.remove('selected');
  });
  previewToggle.addEventListener('click', function () {
    const isOpen = workbench.classList.toggle('preview-open');
    previewToggle.classList.toggle('selected', isOpen);
    sidebar.classList.remove('open');
    filesToggle.setAttribute('aria-expanded', 'false');
  });
  document.getElementById('runButton').addEventListener('click', function () { runPreview(true); });
  document.getElementById('refreshPreviewButton').addEventListener('click', function () { runPreview(true); });
  document.getElementById('backToEditorButton').addEventListener('click', function () {
    workbench.classList.remove('preview-open');
    previewToggle.classList.remove('selected');
  });
  document.getElementById('downloadButton').addEventListener('click', downloadCurrentFile);
  document.getElementById('tabDownloadButton').addEventListener('click', downloadCurrentFile);
  document.getElementById('newFileButton').addEventListener('click', addFile);
  document.getElementById('deleteFileButton').addEventListener('click', deleteCurrentFile);
  languageSelect.addEventListener('change', changeLanguage);

  populateLanguageOptions();
  renderFileButtons();
  selectFile(currentFile);
  runPreview(false);
})();
