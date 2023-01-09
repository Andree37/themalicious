// colors
// feel free to change this and the names :)
// just do a replace all afterwards
const light_blue = "#91d7e3"
const yellow_pastel = "#eed49f"
const orange_pastel = "#f5a97f"
const brown_pastel = "#f0c6c6"
const dark_blue = "#8aadf4"
const pink_pastel = "#f5bde6"
const dark_pink = "#ed8796"
const blue_grey = "#8087a2"
const light_green = "#8bd5ca"
const super_light_pink = "#f4dbd6"
const light_purple = "#b7bdf8"
const pastel_green = "#a6da95"
const pastel_dark_blue = "#939ab7"
const blue_white = "#cad3f5"
const pastel_orange = "#ee99a0"
const pastel_dark_pink = "#c6a0f6"
const gray = "#6e738d"
const light_gray = "#a5adcb"
const black = "#00000000"
const light_black = "#1e20307f"
const dark_purple = "#5b6078"
const dark_green = "#1e2030"
const super_dark_green = "#181926"
const kinda_dark_gray = "#5b607899" 
const dark_blue_gray = "#494d64"

// theme bones to generate the real theme
const theme = {
    "name": "Catppuccin Macchiato",
    "type": "dark",
    "semanticHighlighting": true,
    "semanticTokenColors": {
        "enumMember": {
            "foreground": light_blue
        },
        "variable.constant": {
            "foreground": yellow_pastel
        },
        "variable.defaultLibrary": {
            "foreground": orange_pastel
        }
    },
    "tokenColors": [
        {
            "name": "All variable",
            "scope": ["variable.language", "variable.other"],
            "settings": {
                "foreground": brown_pastel
            }
        },
        {
            "name": "All function",
            "scope": ["entity.name.function", "support.function"],
            "settings": {
                "foreground": dark_blue,
                "fontStyle": "italic"
            }
        },
        {
            "name": "All parameter",
            "scope": [
                "variable.parameter.function",
                "variable.parameter.function-call"
            ],
            "settings": {
                "foreground": pink_pastel,
                "fontStyle": "italic"
            }
        },
        {
            "name": "All numeric",
            "scope": ["constant.numeric.decimal", "constant.numeric.integer"],
            "settings": {
                "foreground": orange_pastel,
                "fontStyle": "bold"
            }
        },
        {
            "name": "All types",
            "scope": "entity.name.type",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "All conditionals",
            "scope": [
                "keyword.control",
                "keyword.control.for",
                "keyword.control.while",
                "keyword.control.if",
                "keyword.control.else",
                "keyword.control.switch",
                "keyword.control.case"
            ],
            "settings": {
                "foreground": dark_pink,
                "fontStyle": "bold"
            }
        },
        {
            "name": "All punctuation brackets",
            "scope": [
                "punctuation.brackets",
                "punctuation.section",
                "punctuation.definition"
            ],
            "settings": {
                "foreground": blue_grey
            }
        },
        {
            "name": "All punctuation delimeters",
            "scope": "punctuation.semi",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "All namespace",
            "scope": "entity.name.namespace",
            "settings": {
                "foreground": super_light_pink
            }
        },
        {
            "name": "All operators",
            "scope": [
                "keyword.operator.comparison",
                "keyword.operator.assignment",
                "keyword.operator.arrow.skinny",
                "keyword.operator.math",
                "keyword.operator.key-value",
                "keyword.operator.misc",
                "keyword.operator.namespace"
            ],
            "settings": {
                "foreground": light_blue,
                "fontStyle": "bold"
            }
        },
        {
            "name": "All built-in constants",
            "scope": "constant.language",
            "settings": {
                "foreground": light_purple,
                "fontStyle": "italic"
            }
        },
        {
            "name": "All constants",
            "scope": "constant.other",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "JSON quoted string",
            "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "JSON punctuation string",
            "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "JSON punct structure",
            "scope": [
                "source.json meta.structure.dictionary.json > value.json > string.quoted.json",
                "source.json meta.structure.array.json > value.json > string.quoted.json",
                "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation",
                "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation"
            ],
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "JSON property name",
            "scope": "support.type.property-name.json.comments",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "JSON constants",
            "scope": "constant.language.json.comments",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "JSON punctuation",
            "scope": [
                "punctuation.separator.dictionary.pair.json.comments",
                "punctuation.separator.array.json.comments"
            ],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "JSON brackets",
            "scope": [
                "punctuation.definition.dictionary.begin.json.comments",
                "punctuation.definition.dictionary.end.json.comments",
                "punctuation.definition.array.begin.json.comments",
                "punctuation.definition.array.end.json.comments"
            ],
            "settings": {
                "foreground": pastel_dark_blue
            }
        },
        {
            "name": "JSON constant language",
            "scope": [
                "source.json meta.structure.dictionary.json > constant.language.json",
                "source.json meta.structure.array.json > constant.language.json"
            ],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "JSON property name [VSCODE-CUSTOM]",
            "scope": "support.type.property-name.json",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
            "scope": "support.type.property-name.json punctuation",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "unison punctuation",
            "scope": [
                "punctuation.definition.delayed.unison",
                "punctuation.definition.list.begin.unison",
                "punctuation.definition.list.end.unison",
                "punctuation.definition.ability.begin.unison",
                "punctuation.definition.ability.end.unison",
                "punctuation.operator.assignment.as.unison",
                "punctuation.separator.pipe.unison",
                "punctuation.separator.delimiter.unison",
                "punctuation.definition.hash.unison"
            ],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "haskell variable generic-type",
            "scope": "variable.other.generic-type.haskell",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "haskell storage type",
            "scope": "storage.type.haskell",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "support.variable.magic.python",
            "scope": "support.variable.magic.python",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "punctuation.separator.parameters.python",
            "scope": [
                "punctuation.separator.period.python",
                "punctuation.separator.element.python",
                "punctuation.parenthesis.begin.python",
                "punctuation.parenthesis.end.python"
            ],
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "variable.parameter.function.language.special.self.python",
            "scope": "variable.parameter.function.language.special.self.python",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Rust modifier",
            "scope": "storage.modifier.lifetime.rust",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Rust types",
            "scope": "entity.name.type.rust",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "Rust functions std",
            "scope": "support.function.std.rust",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "Rust functions",
            "scope": "entity.name.function.rust",
            "settings": {
                "foreground": dark_blue,
                "fontStyle": "italic"
            }
        },
        {
            "name": "Rust function keyword",
            "scope": "keyword.other.fn.rust",
            "settings": {
                "foreground": pastel_orange
            }
        },
        {
            "name": "Rust conditionals",
            "scope": "keyword.control.rust",
            "settings": {
                "foreground": pastel_dark_pink,
                "fontStyle": "bold italic"
            }
        },
        {
            "name": "Rust punctuation brackets",
            "scope": [
                "punctuation.brackets.curly.rust",
                "punctuation.brackets.round.rust",
                "punctuation.brackets.square.rust",
                "punctuation.brackets.attribute.rust"
            ],
            "settings": {
                "foreground": blue_grey
            }
        },
        {
            "name": "Rust namespace",
            "scope": "entity.name.namespace.rust",
            "settings": {
                "foreground": super_light_pink
            }
        },
        {
            "name": "Rust punctuation delimeters",
            "scope": "punctuation.semi.rust",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Rust operators",
            "scope": [
                "keyword.operator.comparison.rust",
                "keyword.operator.assignment.equal.rust",
                "keyword.operator.arrow.skinny.rust",
                "keyword.operator.math.rust",
                "keyword.operator.key-value.rust",
                "keyword.operator.misc.rust"
            ],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "Rust operator namespaces",
            "scope": "keyword.operator.namespace.rust",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Rust definition attributes",
            "scope": [
                "punctuation.definition.attribute.rust",
                "keyword.operator.attribute.inner.rust"
            ],
            "settings": {
                "foreground": light_green,
                "fontStyle": "bold"
            }
        },
        {
            "name": "Rust math logic",
            "scope": "constant.numeric.decimal.rust",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Rust constants",
            "scope": "support.constant.core.rust",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "Rust entity name",
            "scope": "entity.name.lifetime.rust",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Rust variable",
            "scope": ["variable.language.rust", "variable.other.rust"],
            "settings": {
                "foreground": blue_white,
                "fontStyle": "italic"
            }
        },
        {
            "name": "Rust misc operators",
            "scope": "keyword.operator.misc.rust",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Rust sigil operator",
            "scope": "keyword.operator.sigil.rust",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "Lua operators",
            "scope": "keyword.operator.lua",
            "settings": {
                "foreground": light_blue,
                "fontStyle": "bold"
            }
        },
        {
            "name": "Lua numeric",
            "scope": "constant.numeric.integer.lua",
            "settings": {
                "foreground": orange_pastel,
                "fontStyle": "bold"
            }
        },
        {
            "name": "Lua other vars",
            "scope": "variable.other.lua",
            "settings": {
                "foreground": light_purple,
                "fontStyle": "italic"
            }
        },
        {
            "name": "Lua brackets",
            "scope": [
                "punctuation.definition.parameters.end.lua",
                "punctuation.definition.parameters.begin.lua"
            ],
            "settings": {
                "foreground": blue_grey
            }
        },
        {
            "name": "C++ Puct Delimeters",
            "scope": "punctuation.terminator.statement.cpp",
            "settings": {
                "foreground": light_green,
                "fontStyle": "bold"
            }
        },
        {
            "name": "C++ Variables",
            "scope": "variable.other.local.cpp",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "C++ Operators",
            "scope": [
                "punctuation.separator.scope-resolution.cpp",
                "punctuation.separator.scope-resolution.namespace.alias.cpp",
                "punctuation.separator.scope-resolution.namespace.using.cpp"
            ],
            "settings": {
                "foreground": light_blue,
                "fontStyle": "bold"
            }
        },
        {
            "name": "C++ function",
            "scope": "meta.function.c,meta.function.cpp",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "C++ constructor/destructor",
            "scope": [
                "entity.name.function.definition.special.constructor",
                "entity.name.function.definition.special.member.destructor"
            ],
            "settings": {
                "foreground": light_purple
            }
        },
        {
            "name": "C++ directive",
            "scope": [
                "keyword.control.directive",
                "keyword.other.using.directive",
                "punctuation.definition.directive"
            ],
            "settings": {
                "foreground": light_green,
                "fontStyle": "italic"
            }
        },
        {
            "name": "C++ ifdef directive",
            "scope": [
                "keyword.control.directive.conditional.ifdef.cpp",
                "keyword.control.directive.else.cpp",
                "keyword.control.directive.else.cpp punctuation.definition.directive.cpp",
                "keyword.control.directive.endif.cpp",
                "keyword.control.directive.conditional.ifdef.cpp punctuation.definition.directive.cpp",
                "keyword.control.directive.endif.cpp punctuation.definition.directive.cpp"
            ],
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "C++ misc",
            "scope": [
                "entity.name.other.preprocessor.macro.predefined.probably",
                "entity.name.scope-resolution.cpp"
            ],
            "settings": {
                "foreground": super_light_pink,
                "fontStyle": "italic"
            }
        },
        {
            "name": "C++ pointer/reference",
            "scope": [
                "storage.modifier.pointer.cpp",
                "storage.modifier.reference.cpp"
            ],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "C++ loop/conditional",
            "scope": [
                "keyword.control.for",
                "keyword.control.while",
                "keyword.control.if",
                "keyword.control.else",
                "keyword.control.switch",
                "keyword.control.case"
            ],
            "settings": {
                "foreground": pastel_dark_pink,
                "fontStyle": "bold"
            }
        },
        {
            "name": "C++ return",
            "scope": "keyword.control.return",
            "settings": {
                "foreground": pink_pastel
            }
        },
        {
            "name": "C++ block",
            "scope": [
                "punctuation.section.block.begin.bracket.curly.cpp",
                "punctuation.section.block.end.bracket.curly.cpp",
                "punctuation.terminator.statement.c",
                "punctuation.section.block.begin.bracket.curly.c",
                "punctuation.section.block.end.bracket.curly.c",
                "punctuation.section.parens.begin.bracket.round.c",
                "punctuation.section.parens.end.bracket.round.c",
                "punctuation.section.parameters.begin.bracket.round.c",
                "punctuation.section.parameters.end.bracket.round.c"
            ],
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "C++ storage type modifier",
            "scope": "storage.type.built-in.primitive.cpp",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "C++/C#",
            "scope": [
                "entity.name.label.cs",
                "entity.name.scope-resolution.function.call",
                "entity.name.scope-resolution.function.definition"
            ],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "support.constant.edge",
            "scope": "support.constant.edge",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "regexp constant character-class",
            "scope": "constant.other.character-class.regexp",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "regexp operator.quantifier",
            "scope": "keyword.operator.quantifier.regexp",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "punctuation.definition",
            "scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "Comment Markup Link",
            "scope": "comment markup.link",
            "settings": {
                "foreground": gray
            }
        },
        {
            "name": "markup diff",
            "scope": "markup.changed.diff",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "diff",
            "scope": [
                "meta.diff.header.from-file",
                "meta.diff.header.to-file",
                "punctuation.definition.from-file.diff",
                "punctuation.definition.to-file.diff"
            ],
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "inserted.diff",
            "scope": "markup.inserted.diff",
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "deleted.diff",
            "scope": "markup.deleted.diff",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Quote multi",
            "scope": [
                "string.quoted.docstring.multi",
                "string.quoted.multi",
                "source.python string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
                "source.python string.quoted.docstring.multi.python punctuation.definition.string.end.python",
                "source.python string.quoted.multi.python punctuation.definition.string.begin.python",
                "source.python string.quoted.multi.python punctuation.definition.string.end.python",
                "markup.fenced_code.block"
            ],
            "settings": {
                "foreground": pastel_green,
                "fontStyle": "italic"
            }
        },
        {
            "name": "js/ts punctuation separator key-value",
            "scope": "punctuation.separator.key-value",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "js/ts import keyword",
            "scope": "keyword.operator.expression.import",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "math js/ts",
            "scope": "support.constant.math",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "math property js/ts",
            "scope": "support.constant.property.math",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "js/ts variable.other.constant",
            "scope": "variable.other.constant",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "java type",
            "scope": [
                "storage.type.annotation.java",
                "storage.type.object.array.java"
            ],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "java source",
            "scope": "source.java",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "java modifier.import",
            "scope": [
                "punctuation.section.block.begin.java",
                "punctuation.section.block.end.java",
                "punctuation.definition.method-parameters.begin.java",
                "punctuation.definition.method-parameters.end.java",
                "meta.method.identifier.java",
                "punctuation.section.method.begin.java",
                "punctuation.section.method.end.java",
                "punctuation.terminator.java",
                "punctuation.section.class.begin.java",
                "punctuation.section.class.end.java",
                "punctuation.section.inner-class.begin.java",
                "punctuation.section.inner-class.end.java",
                "meta.method-call.java",
                "punctuation.section.class.begin.bracket.curly.java",
                "punctuation.section.class.end.bracket.curly.java",
                "punctuation.section.method.begin.bracket.curly.java",
                "punctuation.section.method.end.bracket.curly.java",
                "punctuation.separator.period.java",
                "punctuation.bracket.angle.java",
                "punctuation.definition.annotation.java",
                "meta.method.body.java"
            ],
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "java modifier.import",
            "scope": "meta.method.java",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "java modifier.import",
            "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "java instanceof",
            "scope": "keyword.operator.instanceof.java",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "java variable.name",
            "scope": "meta.definition.variable.name.java",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "operator logical",
            "scope": ["keyword.operator.logical", "keyword.operator.ternary"],
            "settings": {
                "foreground": light_blue,
                "fontStyle": "bold"
            }
        },
        {
            "name": "operator bitwise",
            "scope": "keyword.operator.bitwise",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "operator channel",
            "scope": "keyword.operator.channel",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "support.constant.property-value.scss",
            "scope": [
                "support.constant.property-value.scss",
                "support.constant.property-value.css"
            ],
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "CSS/SCSS/LESS Operators",
            "scope": [
                "keyword.operator.css",
                "keyword.operator.scss",
                "keyword.operator.less"
            ],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "css color standard name",
            "scope": [
                "support.constant.color.w3c-standard-color-name.css",
                "support.constant.color.w3c-standard-color-name.scss"
            ],
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "css comma",
            "scope": "punctuation.separator.list.comma.css",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "css attribute-name.id",
            "scope": "support.constant.color.w3c-standard-color-name.css",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "css property-name",
            "scope": "support.type.vendored.property-name.css",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "js/ts module",
            "scope": [
                "support.module.node",
                "support.type.object.module",
                "support.module.node"
            ],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "entity.name.type.module",
            "scope": "entity.name.type.module",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "js variable readwrite",
            "scope": [
                "variable.other.readwrite",
                "meta.object-literal.key",
                "support.variable.property",
                "support.variable.object.process",
                "support.variable.object.node"
            ],
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "js/ts json",
            "scope": "support.constant.json",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "js/ts Keyword",
            "scope": [
                "keyword.operator.expression.instanceof",
                "keyword.operator.new",
                "keyword.operator.ternary",
                "keyword.operator.optional",
                "keyword.operator.expression.keyof"
            ],
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "js/ts console",
            "scope": "support.type.object.console",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "js/ts support.variable.property.process",
            "scope": "support.variable.property.process",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "js console function",
            "scope": "entity.name.function,support.function.console",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "operator",
            "scope": "keyword.operator.delete",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "js dom",
            "scope": "support.type.object.dom",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "js dom variable",
            "scope": ["support.variable.dom", "support.variable.property.dom"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "keyword.operator",
            "scope": [
                "keyword.operator.arithmetic",
                "keyword.operator.comparison",
                "keyword.operator.decrement",
                "keyword.operator.increment",
                "keyword.operator.relational"
            ],
            "settings": {
                "foreground": light_blue,
                "fontStyle": "bold"
            }
        },
        {
            "name": "C operators",
            "scope": [
                "keyword.operator.c",
                "keyword.operator.increment.c",
                "keyword.operator.decrement.c",
                "keyword.operator.bitwise.shift.c",
                "keyword.operator.cpp",
                "keyword.operator.increment.cpp",
                "keyword.operator.decrement.cpp",
                "keyword.operator.bitwise.shift.cpp"
            ],
            "settings": {
                "foreground": light_blue,
                "fontStyle": "bold"
            }
        },
        {
            "name": "Punctuation",
            "scope": "punctuation.separator.delimiter",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Other punctuation .c",
            "scope": ["punctuation.separator.c", "punctuation.separator.cpp"],
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "C type posix-reserved",
            "scope": [
                "support.type.posix-reserved.c",
                "support.type.posix-reserved.cpp"
            ],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "keyword.operator.sizeof.c",
            "scope": ["keyword.operator.sizeof.c", "keyword.operator.sizeof.cpp"],
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "python type",
            "scope": "support.type.python",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "python block",
            "scope": [
                "punctuation.definition.arguments.begin.python",
                "punctuation.definition.arguments.end.python",
                "punctuation.separator.arguments.python",
                "punctuation.definition.list.begin.python",
                "punctuation.definition.list.end.python"
            ],
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "python function-call.generic",
            "scope": "meta.function-call.generic.python",
            "settings": {
                "foreground": dark_blue,
                "fontStyle": "italic"
            }
        },
        {
            "name": "python placeholder reset to normal string",
            "scope": "constant.character.format.placeholder.other.python",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "Operators",
            "scope": "keyword.operator",
            "settings": {
                "foreground": light_blue,
                "fontStyle": "bold"
            }
        },
        {
            "name": "Keywords",
            "scope": "keyword",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "Namespaces",
            "scope": "entity.name.namespace",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Language variables",
            "scope": "variable.language",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Java Variables",
            "scope": "token.variable.parameter.java",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Java Imports",
            "scope": "import.storage.java",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Packages",
            "scope": "token.package.keyword",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "Packages",
            "scope": "token.package",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Functions",
            "scope": [
                "entity.name.function",
                "meta.require",
                "support.function.any-method",
                "variable.function"
            ],
            "settings": {
                "foreground": dark_blue,
                "fontStyle": "italic"
            }
        },
        {
            "name": "Classes",
            "scope": "entity.name.type.namespace",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Classes",
            "scope": "support.class, entity.name.type.class",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Class name",
            "scope": "entity.name.class.identifier.namespace.type",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Class name",
            "scope": [
                "entity.name.class",
                "variable.other.class.js",
                "variable.other.class.ts"
            ],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Class name php",
            "scope": "variable.other.class.php",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Type Name",
            "scope": "entity.name.type",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Keyword Control",
            "scope": "keyword.control",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "Control Elements",
            "scope": "control.elements, keyword.operator.less",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "Methods",
            "scope": "keyword.other.special-method",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "Storage",
            "scope": "storage",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "Storage JS TS",
            "scope": "token.storage",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "Source Js Keyword Operator Delete, In, Of, Instanceof, New, Typeof, Void",
            "scope": [
                "keyword.operator.expression.delete",
                "keyword.operator.expression.in",
                "keyword.operator.expression.of",
                "keyword.operator.expression.instanceof",
                "keyword.operator.new",
                "keyword.operator.expression.typeof",
                "keyword.operator.expression.void"
            ],
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "Java Storage",
            "scope": "token.storage.type.java",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Support",
            "scope": "support.function",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "Support type",
            "scope": "support.type.property-name",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Support type",
            "scope": "support.constant.property-value",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Support type",
            "scope": "support.constant.font-name",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "Meta tag",
            "scope": "meta.tag",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Strings",
            "scope": "string",
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "Inherited Class",
            "scope": "entity.other.inherited-class",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Constant other symbol",
            "scope": "constant.other.symbol",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "Integers",
            "scope": "constant.numeric",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Constants",
            "scope": "constant",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "Constants",
            "scope": "punctuation.definition.constant",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "Tags",
            "scope": "entity.name.tag",
            "settings": {
                "foreground": pastel_dark_pink
            }
        },
        {
            "name": "Attributes",
            "scope": "entity.other.attribute-name",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "Attribute IDs",
            "scope": "entity.other.attribute-name.id",
            "settings": {
                "fontStyle": "",
                "foreground": dark_blue
            }
        },
        {
            "name": "Attribute class",
            "scope": "entity.other.attribute-name.class.css",
            "settings": {
                "fontStyle": "",
                "foreground": yellow_pastel
            }
        },
        {
            "name": "SCSS variables",
            "scope": "variable.scss",
            "settings": {
                "foreground": pastel_dark_pink
            }
        },
        {
            "name": "Selector",
            "scope": "meta.selector",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "Headings",
            "scope": "markup.heading",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Headings",
            "scope": "markup.heading punctuation.definition.heading, entity.name.section",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "Units",
            "scope": "keyword.other.unit",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Bold",
            "scope": "markup.bold,todo.bold",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "Bold",
            "scope": "punctuation.definition.bold",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "markup Italic",
            "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "emphasis md",
            "scope": "emphasis md",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown headings",
            "scope": "entity.name.section.markdown",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
            "scope": "punctuation.definition.heading.markdown",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "punctuation.definition.list.begin.markdown",
            "scope": "punctuation.definition.list.begin.markdown",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown heading setext",
            "scope": "markup.heading.setext",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
            "scope": "punctuation.definition.bold.markdown",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
            "scope": "markup.inline.raw.markdown",
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
            "scope": "markup.inline.raw.string.markdown",
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
            "scope": "punctuation.definition.list.markdown",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
            "scope": [
                "punctuation.definition.string.begin.markdown",
                "punctuation.definition.string.end.markdown",
                "punctuation.definition.metadata.markdown"
            ],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "beginning.punctuation.definition.list.markdown",
            "scope": ["beginning.punctuation.definition.list.markdown"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
            "scope": "punctuation.definition.metadata.markdown",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
            "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
            "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "Regular Expressions",
            "scope": "string.regexp",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "Escape Characters",
            "scope": "constant.character.escape",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "Embedded",
            "scope": "punctuation.section.embedded, variable.interpolation",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Embedded",
            "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "illegal, deprecated",
            "scope": "invalid.illegal, invalid.deprecated",
            "settings": {
                "foreground": gray,
                "fontStyle": "strikethrough"
            }
        },
        {
            "name": "illegal",
            "scope": "invalid.illegal.bad-ampersand.html",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Broken",
            "scope": "invalid.broken",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "Unimplemented",
            "scope": "invalid.unimplemented",
            "settings": {
                "foreground": light_gray
            }
        },
        {
            "name": "laravel blade tag",
            "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "laravel blade @",
            "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "use statement for other classes",
            "scope": [
                "support.other.namespace.use.php",
                "support.other.namespace.use-as.php",
                "support.other.namespace.php",
                "entity.other.alias.php",
                "meta.interface.php"
            ],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "error suppression",
            "scope": "keyword.operator.error-control.php",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "php instanceof",
            "scope": "keyword.operator.type.php",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "style double quoted array index normal begin",
            "scope": "punctuation.section.array.begin.php",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "style double quoted array index normal end",
            "scope": "punctuation.section.array.end.php",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "php illegal.non-null-typehinted",
            "scope": "invalid.illegal.non-null-typehinted.php",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "php types",
            "scope": [
                "storage.type.php",
                "meta.other.type.phpdoc.php",
                "keyword.other.type.php",
                "keyword.other.array.phpdoc.php"
            ],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "php call-function",
            "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "php function-resets",
            "scope": [
                "punctuation.definition.parameters.begin.bracket.round.php",
                "punctuation.definition.parameters.end.bracket.round.php",
                "punctuation.separator.delimiter.php",
                "punctuation.section.scope.begin.php",
                "punctuation.section.scope.end.php",
                "punctuation.terminator.expression.php",
                "punctuation.definition.arguments.begin.bracket.round.php",
                "punctuation.definition.arguments.end.bracket.round.php",
                "punctuation.definition.storage-type.begin.bracket.round.php",
                "punctuation.definition.storage-type.end.bracket.round.php",
                "punctuation.definition.array.begin.bracket.round.php",
                "punctuation.definition.array.end.bracket.round.php",
                "punctuation.definition.begin.bracket.round.php",
                "punctuation.definition.end.bracket.round.php",
                "punctuation.definition.begin.bracket.curly.php",
                "punctuation.definition.end.bracket.curly.php",
                "punctuation.definition.section.switch-block.end.bracket.curly.php",
                "punctuation.definition.section.switch-block.start.bracket.curly.php",
                "punctuation.definition.section.switch-block.begin.bracket.curly.php",
                "punctuation.definition.section.switch-block.end.bracket.curly.php"
            ],
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "support php constants",
            "scope": [
                "support.constant.ext.php",
                "support.constant.std.php",
                "support.constant.core.php",
                "support.constant.parser-token.php"
            ],
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "php goto",
            "scope": "entity.name.goto-label.php,support.other.php",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "php logical/bitwise operator",
            "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "php regexp operator",
            "scope": "keyword.operator.regexp.php",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "php comparison",
            "scope": "keyword.operator.comparison.php",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "php heredoc/nowdoc",
            "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "python function decorator @",
            "scope": "meta.function.decorator.python",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "python function support",
            "scope": [
                "support.token.decorator.python",
                "meta.function.decorator.identifier.python"
            ],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "parameter function js/ts",
            "scope": "function.parameter",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "brace function",
            "scope": "function.brace",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "parameter function ruby cs",
            "scope": ["function.parameter.ruby", "function.parameter.cs"],
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "constant.language.symbol.ruby",
            "scope": "constant.language.symbol.ruby",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "rgb-value",
            "scope": "rgb-value",
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "rgb value",
            "scope": "inline-color-decoration rgb-value",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "rgb value less",
            "scope": "less rgb-value",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "sass selector",
            "scope": "selector.sass",
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "ts primitive/builtin types",
            "scope": [
                "support.type.primitive.ts",
                "support.type.builtin.ts",
                "support.type.primitive.tsx",
                "support.type.builtin.tsx"
            ],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "block scope",
            "scope": "block.scope.end,block.scope.begin",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "cs storage type",
            "scope": "storage.type.cs",
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "cs local variable",
            "scope": "entity.name.variable.local.cs",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "scope": "token.info-token",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "scope": "token.warn-token",
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "scope": "token.error-token",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "scope": "token.debug-token",
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "String interpolation",
            "scope": [
                "punctuation.definition.template-expression.begin",
                "punctuation.definition.template-expression.end",
                "punctuation.section.embedded"
            ],
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "Reset JavaScript string interpolation expression",
            "scope": ["meta.template.expression"],
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Import module JS",
            "scope": ["keyword.operator.module"],
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "js Flowtype",
            "scope": ["support.type.type.flowtype"],
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "js Flow",
            "scope": ["support.type.primitive"],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "js class prop",
            "scope": ["meta.property.object"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "js func parameter",
            "scope": ["variable.parameter.function.js"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "js template literals begin",
            "scope": ["keyword.other.template.begin"],
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "js template literals end",
            "scope": ["keyword.other.template.end"],
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "js template literals variable braces begin",
            "scope": ["keyword.other.substitution.begin"],
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "js template literals variable braces end",
            "scope": ["keyword.other.substitution.end"],
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "go operator",
            "scope": [
                "keyword.operator.arithmetic.go",
                "keyword.operator.address.go"
            ],
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "Go package name",
            "scope": ["entity.name.package.go"],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Go import statement",
            "scope": "keyword.import.go",
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "elm prelude",
            "scope": ["support.type.prelude.elm"],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "elm constant",
            "scope": ["support.constant.elm"],
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "template literal",
            "scope": ["punctuation.quasi.element"],
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "html/pug (jade) escaped characters and entities",
            "scope": ["constant.character.entity"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
            "scope": [
                "entity.other.attribute-name.pseudo-element",
                "entity.other.attribute-name.pseudo-class"
            ],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "Clojure globals",
            "scope": ["entity.global.clojure"],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Clojure symbols",
            "scope": ["meta.symbol.clojure"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Clojure constants",
            "scope": ["constant.keyword.clojure"],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "CoffeeScript Function Argument",
            "scope": ["meta.arguments.coffee", "variable.parameter.function.coffee"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Ini Default Text",
            "scope": ["source.ini"],
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "Shell definition variables",
            "scope": ["punctuation.definition.variable.shell"],
            "settings": {
                "foreground": blue_grey
            }
        },
        {
            "name": "Shell logical operators",
            "scope": ["keyword.operator.logical.shell"],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "Shell clauses",
            "scope": ["meta.scope.case-clause-body.shell"],
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Shell funcs",
            "scope": ["meta.scope.group.shell"],
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "Shell interpolated cmds",
            "scope": ["string.interpolated.dollar.shell"],
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "Shell interpolated strings",
            "scope": ["string.quoted.single.shell"],
            "settings": {
                "foreground": light_purple
            }
        },
        {
            "name": "Shell pipe symbol",
            "scope": ["keyword.operator.pipe.shell"],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "Shell group definition",
            "scope": ["punctuation.definition.group.shell"],
            "settings": {
                "foreground": blue_grey
            }
        },
        {
            "name": "Shell conditionals",
            "scope": ["keyword.control.shell"],
            "settings": {
                "foreground": pastel_dark_pink
            }
        },
        {
            "name": "Shell opeartors and punct delimeters",
            "scope": ["keyword.operator.list.shell"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Shell parenthesis",
            "scope": ["punctuation.definition.logical-expression.shell"],
            "settings": {
                "foreground": blue_grey
            }
        },
        {
            "name": "Makefile prerequisities",
            "scope": ["meta.scope.prerequisites.makefile"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Makefile text colour",
            "scope": ["source.makefile"],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Groovy import names",
            "scope": ["storage.modifier.import.groovy"],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "Groovy Methods",
            "scope": ["meta.method.groovy"],
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "Groovy Variables",
            "scope": ["meta.definition.variable.name.groovy"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "Groovy Inheritance",
            "scope": ["meta.definition.class.inherited.classes.groovy"],
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "HLSL Semantic",
            "scope": ["support.variable.semantic.hlsl"],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "HLSL Types",
            "scope": [
                "support.type.texture.hlsl",
                "support.type.sampler.hlsl",
                "support.type.object.hlsl",
                "support.type.object.rw.hlsl",
                "support.type.fx.hlsl",
                "support.type.object.hlsl"
            ],
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "SQL Variables",
            "scope": ["text.variable", "text.bracketed"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "types",
            "scope": ["support.type.swift", "support.type.vb.asp"],
            "settings": {
                "foreground": orange_pastel
            }
        },
        {
            "name": "heading 1, keyword",
            "scope": ["entity.name.function.xi"],
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "heading 2, callable",
            "scope": ["entity.name.class.xi"],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "heading 3, property",
            "scope": ["constant.character.character-class.regexp.xi"],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "heading 4, type, class, interface",
            "scope": ["constant.regexp.xi"],
            "settings": {
                "foreground": dark_pink
            }
        },
        {
            "name": "heading 5, enums, preprocessor, constant, decorator",
            "scope": ["keyword.control.xi"],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "heading 6, number",
            "scope": ["invalid.xi"],
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "string",
            "scope": ["beginning.punctuation.definition.quote.markdown.xi"],
            "settings": {
                "foreground": pastel_green
            }
        },
        {
            "name": "comments",
            "scope": ["beginning.punctuation.definition.list.markdown.xi"],
            "settings": {
                "foreground": gray
            }
        },
        {
            "name": "link",
            "scope": ["constant.character.xi"],
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "accent",
            "scope": ["accent.xi"],
            "settings": {
                "foreground": dark_blue
            }
        },
        {
            "name": "wikiword",
            "scope": ["wikiword.xi"],
            "settings": {
                "foreground": yellow_pastel
            }
        },
        {
            "name": "language operators like '+', '-' etc",
            "scope": ["constant.other.color.rgb-value.xi"],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "elements to dim",
            "scope": ["punctuation.definition.tag.xi"],
            "settings": {
                "foreground": gray
            }
        },
        {
            "name": "Markdown underscore-style headers",
            "scope": [
                "entity.name.label.cs",
                "markup.heading.setext.1.markdown",
                "markup.heading.setext.2.markdown"
            ],
            "settings": {
                "foreground": light_green
            }
        },
        {
            "name": "meta.brace.square",
            "scope": [" meta.brace.square"],
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "name": "Comments",
            "scope": "comment, punctuation.definition.comment",
            "settings": {
                "fontStyle": "italic",
                "foreground": gray
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Quote",
            "scope": "markup.quote.markdown",
            "settings": {
                "foreground": gray
            }
        },
        {
            "name": "punctuation.definition.block.sequence.item.yaml",
            "scope": "punctuation.definition.block.sequence.item.yaml",
            "settings": {
                "foreground": blue_white
            }
        },
        {
            "scope": ["constant.language.symbol.elixir"],
            "settings": {
                "foreground": light_blue
            }
        },
        {
            "name": "js/ts italic",
            "scope": [
                "entity.other.attribute-name.js",
                "entity.other.attribute-name.ts",
                "entity.other.attribute-name.jsx",
                "entity.other.attribute-name.tsx",
                "variable.parameter",
                "variable.language.super"
            ],
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "name": "comment",
            "scope": "comment.line.double-slash,comment.block.documentation",
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "name": "python keyword import",
            "scope": "keyword.control.import.python",
            "settings": {
                "foreground": light_green,
                "fontStyle": "italic"
            }
        },
        {
            "name": "python keyword flow",
            "scope": "keyword.control.flow.python",
            "settings": {
                "foreground": pastel_dark_pink,
                "fontStyle": "bold"
            }
        },
        {
            "name": "python storage type",
            "scope": "storage.type.function.python",
            "settings": {
                "foreground": pastel_orange,
                "fontStyle": "italic"
            }
        },
        {
            "name": "markup.italic.markdown",
            "scope": "markup.italic.markdown",
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "name": "invalid.deprecated.line-too-long.git-commit",
            "scope": "invalid.deprecated.line-too-long.git-commit",
            "settings": {
                "foreground": yellow_pastel,
                "fontStyle": "underline"
            }
        }
    ],
    "colors": {
        "focusBorder": black,
        "foreground": blue_white,
        "disabledForeground": light_gray,
        "widget.shadow": light_black,
        "selection.background": dark_purple,
        "descriptionForeground": blue_white,
        "errorForeground": dark_pink,
        "icon.foreground": pastel_dark_pink,
        "sash.hoverBorder": pastel_dark_pink,
        "window.activeBorder": black,
        "window.inactiveBorder": black,
        "textBlockQuote.background": dark_green,
        "textBlockQuote.border": super_dark_green,
        "textCodeBlock.background": "#24273a",
        "textLink.activeForeground": light_blue,
        "textLink.foreground": dark_blue,
        "textPreformat.foreground": blue_white,
        "textSeparator.foreground": pastel_dark_pink,
        "activityBar.background": super_dark_green,
        "activityBar.foreground": pastel_dark_pink,
        "activityBar.dropBar": kinda_dark_gray,
        "activityBar.inactiveForeground": gray,
        "activityBar.border": black,
        "activityBarBadge.background": pastel_dark_pink,
        "activityBarBadge.foreground": super_dark_green,
        "activityBar.activeBorder": black,
        "activityBar.activeBackground": black,
        "activityBar.activeFocusBorder": black,
        "badge.background": dark_blue_gray,
        "badge.foreground": blue_white,
        "breadcrumb.activeSelectionForeground": pastel_dark_pink,
        "breadcrumb.background": dark_green,
        "breadcrumb.focusForeground": pastel_dark_pink,
        "breadcrumb.foreground": "#cad3f5cc",
        "breadcrumbPicker.background": dark_green,
        "button.background": pastel_dark_pink,
        "button.foreground": super_dark_green,
        "button.border": black,
        "button.separator": black,
        "button.hoverBackground": "#dab4ff",
        "button.secondaryForeground": blue_white,
        "button.secondaryBackground": dark_purple,
        "button.secondaryHoverBackground": "#6f748c",
        "checkbox.background": dark_blue_gray,
        "checkbox.border": black,
        "checkbox.foreground": pastel_dark_pink,
        "dropdown.background": dark_green,
        "dropdown.listBackground": dark_purple,
        "dropdown.border": pastel_dark_pink,
        "dropdown.foreground": blue_white,
        "debugToolBar.background": super_dark_green,
        "debugToolBar.border": black,
        "debugExceptionWidget.background": super_dark_green,
        "debugExceptionWidget.border": pastel_dark_pink,
        "debugTokenExpression.number": orange_pastel,
        "debugTokenExpression.boolean": pastel_dark_pink,
        "debugTokenExpression.string": pastel_green,
        "debugTokenExpression.error": dark_pink,
        "debugIcon.breakpointForeground": dark_pink,
        "debugIcon.breakpointDisabledForeground": "#ed879699",
        "debugIcon.breakpointUnverifiedForeground": "#24273a",
        "debugIcon.breakpointCurrentStackframeForeground": dark_purple,
        "debugIcon.breakpointStackframeForeground": dark_purple,
        "debugIcon.startForeground": pastel_green,
        "debugIcon.pauseForeground": dark_blue,
        "debugIcon.stopForeground": dark_pink,
        "debugIcon.disconnectForeground": dark_purple,
        "debugIcon.restartForeground": light_green,
        "debugIcon.stepOverForeground": pastel_dark_pink,
        "debugIcon.stepIntoForeground": blue_white,
        "debugIcon.stepOutForeground": blue_white,
        "debugIcon.continueForeground": pastel_green,
        "debugIcon.stepBackForeground": dark_purple,
        "debugConsole.infoForeground": dark_blue,
        "debugConsole.warningForeground": orange_pastel,
        "debugConsole.errorForeground": dark_pink,
        "debugConsole.sourceForeground": super_light_pink,
        "debugConsoleInputIcon.foreground": blue_white,
        "diffEditor.border": dark_purple,
        "diffEditor.insertedTextBackground": "#a6da9519",
        "diffEditor.removedTextBackground": "#ed879619",
        "editor.background": "#24273a",
        "editor.findMatchBackground": dark_purple,
        "editor.findMatchBorder": "#c6a0f666",
        "editor.findMatchHighlightBackground": "#f5a97f59",
        "editor.findMatchHighlightBorder": black,
        "editor.findRangeHighlightBackground": "#5b60784c",
        "editor.findRangeHighlightBorder": black,
        "editor.foldBackground": "#91d7e33f",
        "editor.foreground": blue_white,
        "editor.hoverHighlightBackground": "#91d7e33f",
        "editor.inactiveSelectionBackground": black,
        "editor.lineHighlightBackground": "#cad3f511",
        "editor.lineHighlightBorder": "#24273a",
        "editor.rangeHighlightBackground": "#91d7e33f",
        "editor.rangeHighlightBorder": black,
        "editor.selectionBackground": dark_purple,
        "editor.selectionHighlightBackground": "#939ab766",
        "editor.selectionHighlightBorder": "#91d7e333",
        "editor.wordHighlightBackground": "#5b6078b2",
        "editor.wordHighlightStrongBackground": "#5b60787f",
        "editorBracketMatch.background": "#939ab719",
        "editorBracketMatch.border": pastel_dark_blue,
        "editorCodeLens.foreground": blue_grey,
        "editorCursor.background": "#24273a",
        "editorCursor.foreground": super_light_pink,
        "editorError.background": black,
        "editorError.border": black,
        "editorError.foreground": dark_pink,
        "editorGroup.border": dark_purple,
        "editorGroup.dropBackground": kinda_dark_gray,
        "editorGroup.emptyBackground": "#24273a",
        "editorGroupHeader.tabsBackground": super_dark_green,
        "editorGutter.addedBackground": pastel_green,
        "editorGutter.background": "#24273a",
        "editorGutter.commentRangeForeground": pastel_dark_blue,
        "editorGutter.deletedBackground": dark_pink,
        "editorGutter.foldingControlForeground": pastel_dark_blue,
        "editorGutter.modifiedBackground": light_blue,
        "editorHoverWidget.background": dark_green,
        "editorHoverWidget.border": dark_purple,
        "editorHoverWidget.foreground": blue_white,
        "editorIndentGuide.activeBackground": dark_purple,
        "editorIndentGuide.background": dark_blue_gray,
        "editorInfo.background": black,
        "editorInfo.border": black,
        "editorInfo.foreground": dark_blue,
        "editorLineNumber.activeForeground": pastel_dark_pink,
        "editorLineNumber.foreground": blue_grey,
        "editorLink.activeForeground": pastel_dark_pink,
        "editorMarkerNavigation.background": dark_green,
        "editorMarkerNavigationError.background": dark_pink,
        "editorMarkerNavigationInfo.background": dark_blue,
        "editorMarkerNavigationWarning.background": yellow_pastel,
        "editorOverviewRuler.background": dark_green,
        "editorOverviewRuler.border": "#cad3f511",
        "editorRuler.foreground": dark_purple,
        "editorStickyScrollHover.background": "#363a4f",
        "editorSuggestWidget.background": dark_green,
        "editorSuggestWidget.border": dark_purple,
        "editorSuggestWidget.foreground": blue_white,
        "editorSuggestWidget.highlightForeground": pastel_dark_pink,
        "editorSuggestWidget.selectedBackground": "#363a4f",
        "editorWarning.background": black,
        "editorWarning.border": black,
        "editorWarning.foreground": orange_pastel,
        "editorWhitespace.foreground": "#939ab766",
        "editorWidget.background": dark_green,
        "editorWidget.foreground": blue_white,
        "editorWidget.resizeBorder": dark_purple,
        "editorLightBulb.foreground": yellow_pastel,
        "extensionButton.prominentForeground": super_dark_green,
        "extensionButton.prominentBackground": pastel_dark_pink,
        "extensionButton.prominentHoverBackground": "#dab4ff",
        "extensionBadge.remoteBackground": dark_blue,
        "extensionBadge.remoteForeground": super_dark_green,
        "extensionIcon.starForeground": yellow_pastel,
        "extensionIcon.verifiedForeground": pastel_green,
        "extensionIcon.preReleaseForeground": super_light_pink,
        "extensionIcon.sponsorForeground": pink_pastel,
        "gitDecoration.addedResourceForeground": pastel_green,
        "gitDecoration.conflictingResourceForeground": pastel_dark_pink,
        "gitDecoration.deletedResourceForeground": dark_pink,
        "gitDecoration.ignoredResourceForeground": gray,
        "gitDecoration.modifiedResourceForeground": yellow_pastel,
        "gitDecoration.stageDeletedResourceForeground": dark_pink,
        "gitDecoration.stageModifiedResourceForeground": yellow_pastel,
        "gitDecoration.submoduleResourceForeground": dark_blue,
        "gitDecoration.untrackedResourceForeground": pastel_green,
        "input.background": "#363a4f",
        "input.border": black,
        "input.foreground": blue_white,
        "input.placeholderForeground": "#cad3f572",
        "inputOption.activeBackground": "#8aadf426",
        "inputOption.activeBorder": "#18192633",
        "inputOption.activeForeground": blue_white,
        "inputValidation.errorBackground": dark_pink,
        "inputValidation.errorBorder": "#18192633",
        "inputValidation.errorForeground": super_dark_green,
        "inputValidation.infoBackground": dark_blue,
        "inputValidation.infoBorder": "#18192633",
        "inputValidation.infoForeground": super_dark_green,
        "inputValidation.warningBackground": orange_pastel,
        "inputValidation.warningBorder": "#18192633",
        "inputValidation.warningForeground": super_dark_green,
        "list.activeSelectionBackground": dark_blue_gray,
        "list.activeSelectionForeground": blue_white,
        "list.dropBackground": kinda_dark_gray,
        "list.focusBackground": "#363a4f",
        "list.focusForeground": blue_white,
        "list.focusOutline": black,
        "list.highlightForeground": pastel_dark_pink,
        "list.hoverBackground": "#24273a",
        "list.hoverForeground": blue_white,
        "list.inactiveSelectionBackground": dark_blue_gray,
        "list.inactiveSelectionForeground": blue_white,
        "list.warningForeground": yellow_pastel,
        "listFilterWidget.background": dark_blue_gray,
        "listFilterWidget.noMatchesOutline": dark_pink,
        "listFilterWidget.outline": black,
        "tree.indentGuidesStroke": gray,
        "menu.background": "#24273a",
        "menu.border": "#24273a7f",
        "menu.foreground": blue_white,
        "menu.selectionBackground": dark_purple,
        "menu.selectionBorder": black,
        "menu.selectionForeground": blue_white,
        "menu.separatorBackground": dark_purple,
        "menubar.selectionBackground": dark_blue_gray,
        "menubar.selectionForeground": blue_white,
        "merge.commonContentBackground": dark_blue_gray,
        "merge.commonHeaderBackground": dark_purple,
        "merge.currentContentBackground": "#a6da9533",
        "merge.currentHeaderBackground": "#a6da9566",
        "merge.incomingContentBackground": "#8aadf433",
        "merge.incomingHeaderBackground": "#8aadf466",
        "minimap.background": light_black,
        "minimap.errorHighlight": dark_pink,
        "minimap.findMatchHighlight": dark_purple,
        "minimap.selectionHighlight": dark_purple,
        "minimap.warningHighlight": yellow_pastel,
        "minimapGutter.addedBackground": pastel_green,
        "minimapGutter.deletedBackground": dark_pink,
        "minimapGutter.modifiedBackground": light_blue,
        "notificationCenter.border": pastel_dark_pink,
        "notificationCenterHeader.foreground": blue_white,
        "notificationCenterHeader.background": dark_green,
        "notificationToast.border": pastel_dark_pink,
        "notifications.foreground": blue_white,
        "notifications.background": dark_green,
        "notifications.border": pastel_dark_pink,
        "notificationLink.foreground": dark_blue,
        "notificationsErrorIcon.foreground": dark_pink,
        "notificationsWarningIcon.foreground": orange_pastel,
        "notificationsInfoIcon.foreground": dark_blue,
        "panel.background": "#24273a",
        "panel.border": dark_purple,
        "panelSection.border": dark_purple,
        "panelSection.dropBackground": kinda_dark_gray,
        "panelTitle.activeBorder": blue_white,
        "panelTitle.activeForeground": blue_white,
        "panelTitle.inactiveForeground": light_gray,
        "peekView.border": pastel_dark_pink,
        "peekViewEditor.background": dark_green,
        "peekViewEditor.matchHighlightBackground": "#f5a97f3f",
        "peekViewEditor.matchHighlightBorder": orange_pastel,
        "peekViewEditorGutter.background": dark_green,
        "peekViewResult.background": dark_green,
        "peekViewResult.fileForeground": blue_white,
        "peekViewResult.lineForeground": blue_white,
        "peekViewResult.matchHighlightBackground": "#f5a97f3f",
        "peekViewResult.selectionBackground": "#363a4f",
        "peekViewResult.selectionForeground": blue_white,
        "peekViewTitle.background": "#24273a",
        "peekViewTitleDescription.foreground": "#b8c0e0b2",
        "peekViewTitleLabel.foreground": blue_white,
        "pickerGroup.border": pastel_dark_pink,
        "pickerGroup.foreground": pastel_dark_pink,
        "progressBar.background": pastel_dark_pink,
        "scrollbar.shadow": super_dark_green,
        "scrollbarSlider.activeBackground": "#363a4f66",
        "scrollbarSlider.background": "#5b60787f",
        "scrollbarSlider.hoverBackground": gray,
        "settings.focusedRowBackground": "#5b607833",
        "settings.headerForeground": blue_white,
        "settings.modifiedItemIndicator": pastel_dark_pink,
        "settings.dropdownBackground": dark_blue_gray,
        "settings.dropdownListBorder": black,
        "settings.textInputBackground": dark_blue_gray,
        "settings.textInputBorder": black,
        "settings.numberInputBackground": dark_blue_gray,
        "settings.numberInputBorder": black,
        "sideBar.background": dark_green,
        "sideBar.dropBackground": kinda_dark_gray,
        "sideBar.foreground": blue_white,
        "sideBarSectionHeader.background": dark_green,
        "sideBarSectionHeader.foreground": blue_white,
        "sideBarTitle.foreground": pastel_dark_pink,
        "sideBarTitle.background": super_dark_green,
        "statusBar.background": super_dark_green,
        "statusBar.foreground": blue_white,
        "statusBar.noFolderBackground": super_dark_green,
        "statusBar.noFolderForeground": blue_white,
        "statusBar.debuggingBackground": orange_pastel,
        "statusBar.debuggingForeground": super_dark_green,
        "statusBarItem.remoteBackground": dark_blue,
        "statusBarItem.remoteForeground": super_dark_green,
        "statusBarItem.activeBackground": "#5b607866",
        "statusBarItem.hoverBackground": "#5b607833",
        "statusBarItem.prominentForeground": pastel_dark_pink,
        "statusBarItem.prominentBackground": black,
        "statusBarItem.prominentHoverBackground": "#5b607833",
        "statusBarItem.errorForeground": dark_pink,
        "statusBarItem.errorBackground": black,
        "statusBarItem.warningForeground": orange_pastel,
        "statusBarItem.warningBackground": black,
        "commandCenter.foreground": "#b8c0e0",
        "commandCenter.activeForeground": pastel_dark_pink,
        "commandCenter.background": super_dark_green,
        "commandCenter.activeBackground": "#5b607833",
        "commandCenter.border": pastel_dark_pink,
        "tab.activeBackground": "#24273a",
        "tab.activeBorder": pastel_dark_pink,
        "tab.activeBorderTop": black,
        "tab.activeForeground": pastel_dark_pink,
        "tab.border": dark_green,
        "tab.inactiveBackground": dark_green,
        "tab.inactiveForeground": gray,
        "terminal.ansiBlack": gray,
        "terminal.ansiBlue": dark_blue,
        "terminal.ansiBrightBlack": blue_grey,
        "terminal.ansiBrightBlue": dark_blue,
        "terminal.ansiBrightCyan": light_blue,
        "terminal.ansiBrightGreen": pastel_green,
        "terminal.ansiBrightMagenta": pink_pastel,
        "terminal.ansiBrightRed": dark_pink,
        "terminal.ansiBrightWhite": blue_white,
        "terminal.ansiBrightYellow": yellow_pastel,
        "terminal.ansiCyan": light_blue,
        "terminal.ansiGreen": pastel_green,
        "terminal.ansiMagenta": pink_pastel,
        "terminal.ansiRed": dark_pink,
        "terminal.ansiWhite": pastel_dark_blue,
        "terminal.ansiYellow": yellow_pastel,
        "terminal.border": dark_purple,
        "terminal.foreground": blue_white,
        "terminal.dropBackground": kinda_dark_gray,
        "terminal.selectionBackground": dark_purple,
        "terminalCursor.background": "#24273a",
        "terminalCursor.foreground": super_light_pink,
        "titleBar.activeBackground": super_dark_green,
        "titleBar.activeForeground": blue_white,
        "titleBar.inactiveBackground": super_dark_green,
        "titleBar.inactiveForeground": "#cad3f57f",
        "titleBar.border": black,
        "welcomePage.tileBackground": dark_green,
        "welcomePage.progress.background": super_dark_green,
        "welcomePage.progress.foreground": pastel_dark_pink,
        "walkThrough.embeddedEditorBackground": "#24273a4c",
        "symbolIcon.textForeground": blue_white,
        "symbolIcon.arrayForeground": orange_pastel,
        "symbolIcon.booleanForeground": pastel_dark_pink,
        "symbolIcon.classForeground": yellow_pastel,
        "symbolIcon.colorForeground": pink_pastel,
        "symbolIcon.constantForeground": orange_pastel,
        "symbolIcon.constructorForeground": light_purple,
        "symbolIcon.enumeratorForeground": yellow_pastel,
        "symbolIcon.enumeratorMemberForeground": yellow_pastel,
        "symbolIcon.eventForeground": pink_pastel,
        "symbolIcon.fieldForeground": blue_white,
        "symbolIcon.fileForeground": pastel_dark_pink,
        "symbolIcon.folderForeground": pastel_dark_pink,
        "symbolIcon.functionForeground": dark_blue,
        "symbolIcon.interfaceForeground": yellow_pastel,
        "symbolIcon.keyForeground": light_green,
        "symbolIcon.keywordForeground": pastel_dark_pink,
        "symbolIcon.methodForeground": dark_blue,
        "symbolIcon.moduleForeground": blue_white,
        "symbolIcon.namespaceForeground": yellow_pastel,
        "symbolIcon.nullForeground": pastel_orange,
        "symbolIcon.numberForeground": orange_pastel,
        "symbolIcon.objectForeground": yellow_pastel,
        "symbolIcon.operatorForeground": light_green,
        "symbolIcon.packageForeground": brown_pastel,
        "symbolIcon.propertyForeground": pastel_orange,
        "symbolIcon.referenceForeground": yellow_pastel,
        "symbolIcon.snippetForeground": brown_pastel,
        "symbolIcon.stringForeground": pastel_green,
        "symbolIcon.structForeground": light_green,
        "symbolIcon.typeParameterForeground": pastel_orange,
        "symbolIcon.unitForeground": blue_white,
        "symbolIcon.variableForeground": blue_white,
        "charts.foreground": blue_white,
        "charts.lines": "#b8c0e0",
        "charts.red": dark_pink,
        "charts.blue": dark_blue,
        "charts.yellow": yellow_pastel,
        "charts.orange": orange_pastel,
        "charts.green": pastel_green,
        "charts.purple": pastel_dark_pink,
        "errorLens.errorBackground": "#ed879626",
        "errorLens.errorMessageBackground": "#ed879626",
        "errorLens.errorBackgroundLight": "#ed879626",
        "errorLens.errorForeground": dark_pink,
        "errorLens.errorForegroundLight": dark_pink,
        "errorLens.warningBackground": "#f5a97f26",
        "errorLens.warningMessageBackground": "#f5a97f26",
        "errorLens.warningBackgroundLight": "#f5a97f26",
        "errorLens.warningForeground": orange_pastel,
        "errorLens.warningForegroundLight": orange_pastel,
        "errorLens.infoBackground": "#8aadf426",
        "errorLens.infoMessageBackground": "#8aadf426",
        "errorLens.infoBackgroundLight": "#8aadf426",
        "errorLens.infoForeground": dark_blue,
        "errorLens.infoForegroundLight": dark_blue,
        "errorLens.hintBackground": "#a6da9526",
        "errorLens.hintMessageBackground": "#a6da9526",
        "errorLens.hintBackgroundLight": "#a6da9526",
        "errorLens.hintForeground": pastel_green,
        "errorLens.hintForegroundLight": pastel_green,
        "errorLens.statusBarIconErrorForeground": dark_pink,
        "errorLens.statusBarIconWarningForeground": orange_pastel,
        "errorLens.statusBarErrorForeground": dark_pink,
        "errorLens.statusBarWarningForeground": orange_pastel,
        "errorLens.statusBarInfoForeground": dark_blue,
        "errorLens.statusBarHintForeground": pastel_green,
        "editorBracketHighlight.foreground1": dark_pink,
        "editorBracketHighlight.foreground2": orange_pastel,
        "editorBracketHighlight.foreground3": yellow_pastel,
        "editorBracketHighlight.foreground4": pastel_green,
        "editorBracketHighlight.foreground5": "#7dc4e4",
        "editorBracketHighlight.foreground6": pastel_dark_pink,
        "editorBracketHighlight.unexpectedBracket.foreground": pastel_orange
    }
}
