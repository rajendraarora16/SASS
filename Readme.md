## Using sass library
```
@use "sass:math";

// Declaring variable
$base-value: 20px;
$base-padding: 2rem;
$base-font-size: 12px;
```

## color
```
$primary: #326dee;
$secondary: #1ac886;
$error: #d32752;
$info: #f6c31c;
```

## Using math function
```
$divide-number: math.div($base-value, 10);
$multiply-number: $base-font-size * 10;
$max-number: max(10, 70, 20, 30);
$min-number: min(70, 90, 9, 80, 20);
$math-floor-number: math.floor(4.99992);
$math-round-number: math.round(4.99992);
$math-random-num: math.random();
$math-random-num-limit: math.random(10);

@debug "Divide number: "$divide-number;
@debug "Multiply number: "$multiply-number;
@debug "Max number: "$max-number;
@debug "Max number: "$min-number;
@debug "Math floor number: "$math-floor-number;
@debug "Math round number: "$math-round-number;
@debug "Math random number: "$math-random-num;
@debug "Math random number limited: "$math-random-num-limit;
```

## map declaration
```
$colors: (
    "primary": $primary,
    "secondary": $secondary,
    "error": $error,
    "info": $info,
    "blue": #1919E6,
    "red": #E61919,
    "yellow": #E6E619,
    "green": #19E635,
    "orange": #FFa600,
    "purple": #9900FF,
    "grey": #808080,
    "black": black,
    "white": white,
);
```

## Using map function logic

```
$primary-color-value: map-get($colors, "primary");
$removed-color: map-remove($colors, "primary", "secondary");
$merge-color: map-merge($colors, ("dark": #423131));
$map-has-primary: map-has-key($colors, "primary");
$map-values: map-values($colors);

@debug "Primary color is #{$primary-color-value}";
@debug "Removed color is " $removed-color;
@debug "Merged color is " $merge-color;
@debug "Map color has primary " $map-has-primary;
@debug "Map values " $map-values;
```

## Creating list in SASS
```
$list: ("Manohar", "Reena", "Rajendra", "Neha");

@debug "Good family name " $list;
```

## Using each loop

```
@each $key, $value in $colors {
    $index: index($colors, ($key $value));
    @debug "Index: #{$index}, key: #{$key} and value: #{$value}";

    //Creating dark theme
    
    // For loop
    @for $i from 1 through 9 {
        @debug "Iterating for loop: #{$i}";

        // dark theme
        .dark-theme {
            background-color: mix(black, $value, $i * 10%);
        }

        // light theme
        .light-theme {
            background-color: mix(white, $value, $i * 10%);
        }
    }
}
```

## Using if else condition

```
@if (5 > 10) {
    @debug "5 is greater than 10";
} 
@else {
    @debug "No! 5 cannot be grater than 10";   
}
```

## mixin - For mixing declare @mixin - to include use @include

```
@mixin reused-styles($color: white) {
    font-size: 14px;
    font-weight: 500;
    color: $color;
    border: 1px solid $color;
}
.style-class {
    @include reused-styles(#000);
}
```

## Functions in SASS

```
@function lighten-color($color, $percentage) {
    @return lighten($color, $percentage);
}
.style-function {
    background-color: lighten-color(#1919E6, 40%);
}

@function convertPxtoRem($px) {
    @return $px * 0.0625rem;
}

@debug "Converting 16px to rem: #{convertPxtoRem(20)}";
```

## Nesting in SASS

```
.first-class {
    .second-class {
        font-size: 14px;
        // Hovering
        &:hover {
            font-size: 20px;
            color: #E6E619;
        }
    }
}
```

## Utilities - making utilities classes
### For e.g: m-2, pl-4, 0-40

```
$utilities: (
    "padding": (
        "prefix": "display",
        "values": (
            "default": 0,
            "1": $base-padding * 2,
            "2": $base-padding * 4,
            "3": $base-padding * 6,
            "4": $base-padding * 8
        ),
    ),
    "font-size": (
        "prefix": "p",
        "values": (
            "default": 0,
            "1": $base-padding * 2,
            "2": $base-padding * 4,
            "3": $base-padding * 6,
            "4": $base-padding * 8
        ),
    ),
);
```

## Generating utilities classes

```
@each $property, $map in $utilities {
    $prefix: map-get($map, "prefix");
    $values: map-get($map, "values");

    @debug "prefix" $prefix;
    @debug "values" $values;

    @each $k, $v in $values {
        @if ($k == "default") {
            .#{$prefix} {
                #{$property}: $v;    
            }
        } @else {
            .#{$prefix}-#{$k} {
                #{$property}: $v;
            }
        }
    }
}
```

## Media queries in SASS

```
$mediaSizes: (
    "xs": 0,
    "sm": 480px,
    "md": 720px,
    "lg": 960px,
    "xl": 1200px,
);


@mixin xs {
    @media (min-width: map-get($mediaSizes, "xs")) {
        @content;
    }
}
@mixin sm {
    @media (min-width: map-get($mediaSizes, "sm")) {
        @content;
    }
}
@mixin md {
    @media (min-width: map-get($mediaSizes, "md")) {
        @content;
    }
}
@mixin lg {
    @media (min-width: map-get($mediaSizes, "lg")) {
        @content;
    }
}
@mixin xl {    
    @media (min-width: map-get($mediaSizes, "xl")) {
        @content;
    }
}

.responsive-class {
    @include xs {
        color: red;
    }
    @include sm {
        color: blue;
    }
    @include md {
        color: violet;
    }
    @include lg {
        color: greenyellow;
    }
    @include xl {
        color: purple;
    }
}
```