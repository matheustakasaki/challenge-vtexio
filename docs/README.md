# VTEX IO CHALLENGE Theme

Este projeto usa o tema Boilerplate mínimo como modelo básico de loja e também o react-app-template como template para o app custom que se encontra
na pasta custom-slider.

## Preview

![store-theme-default](/docs/preview.png)

## Como utilizar?

1. Crie um workspace de desenvolvimento em seu vtex account
2. Desinstale qualquer outro tema que esteja instalado no workspace atual.
3. Use o comando `vtex install distribuidorasika.test-theme`
4. Utilize o comando `vtex browse para verificar as alterações`

### Editando o Tema

Se for do seu interesse, você pode clonar este repositório e alterar o código como desejar.

Depois de clonar o repositório com `git clone`, é hora de editar o arquivo `manifest.json`.

Uma vez dentro do arquivo, você deve substituir os valores `vendor` e `account`. `vendor` é o nome da conta na qual você está trabalhando e `account` é qualquer coisa que você queira nomear seu tema. Por exemplo:

```json
{
  "vendor": "storecomponents",
  "name": "my-test-theme"
}
```

### Instalando apps obrigatórios

É necessário ter ambos `distribuidorasika.custom-slider`, `vtex.store-sitemap` e `vtex.store` instalados
Execute `vtex list` e verifique se esses aplicativos já estão instalados.
If they aren't, run the following command to install them: `vtex install vtex.store-sitemap vtex.store distribuidorasika.custom-slider -f`

### Desinstalando temas existentes

Ao executar `vtex list`, você pode verificar se algum tema está instalado.

É comum já ter um `vtex.store-theme` instalado quando você inicia o processo de desenvolvimento da frente da loja.

Portanto, se você encontrá-lo na lista do aplicativo, copie seu nome e use-o junto com o comando `vtex uninstall`. Por exemplo:

```json
vtex desinstalar vtex.store-theme
```
