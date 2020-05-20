# DENO | Simple Api Project

## Modules

The repository contains:

- a [Deno](https://deno.land/) (v**1.0**)
- a [oak](https://github.com/oakserver/oak) (v**4.0.0**)
- a [Deno Runner](https://github.com/MarcHanin/drun/tree/master) (v**1.0.0**)

## Directory layout

- [x] Controllers: It includes the methods of incoming requests.
- [x] Data: It contains the mock data we'll use.
- [x] Models: It's the part where the objects to be used in our app are created.
- [x] Routes: It ensures that requests are directed to the appropriate controllers.
- [x] index.ts: It's the main file that we'll launch our app and it contains the necessary configurations.

## Installation

1.  `$ deno install --allow-read --allow-run --unstable https://deno.land/x/drun@v1.0.0/drun.ts`

2.  `$ drun`

## Endpoints

| Endpoint            |                                     Status                                     | Request |
| ------------------- | :----------------------------------------------------------------------------: | :-----: |
| /api/data           | ![yes](http://airesgoncalves.com.br/screenshot/acf-to-rest-api/readme/yes.png) |   GET   |
| /api/data/:username | ![yes](http://airesgoncalves.com.br/screenshot/acf-to-rest-api/readme/yes.png) |   GET   |
| /api/data           | ![yes](http://airesgoncalves.com.br/screenshot/acf-to-rest-api/readme/yes.png) |  POST   |
| /api/data/:username | ![yes](http://airesgoncalves.com.br/screenshot/acf-to-rest-api/readme/yes.png) |   PUT   |
| /api/data/:username | ![yes](http://airesgoncalves.com.br/screenshot/acf-to-rest-api/readme/yes.png) | DELETE  |

## TODO

- [x] Directory Layout
- [x] CRUD Operations
- [x] Routing Operations
- [ ] MongoDB Integration

## License

This project is released under the [MIT License](LICENSE).

```

```
