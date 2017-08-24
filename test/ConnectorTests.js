'use strict'

var window = require("svgdom")
var SVG = require("svg.js")(window)
var UMLWebWidget = require("../dist/codesmithy-umlwebwidget.js")
var tf = require("ishiko-test-framework")
var TestUtils = require("./TestUtils.js")

module.exports = function(theTestHarness) {
    let connectorSequence = theTestHarness.appendTestSequence("Connector tests")

    TestUtils.createDirectory(__dirname + "/output/connectortests")

    new tf.FunctionBasedTest("Creation test 1", ConnectorCreationTest1, connectorSequence)

    new tf.FileComparisonTest("getLayers test 1", ConnectorGetLayersTest1, connectorSequence)
    new tf.FileComparisonTest("getLayers test 2", ConnectorGetLayersTest2, connectorSequence)
    new tf.FileComparisonTest("getLayers test 3", ConnectorGetLayersTest3, connectorSequence)
    new tf.FileComparisonTest("getLayers test 4", ConnectorGetLayersTest4, connectorSequence)
    new tf.FileComparisonTest("getLayers test 5", ConnectorGetLayersTest5, connectorSequence)
    new tf.FileComparisonTest("getLayers test 6", ConnectorGetLayersTest6, connectorSequence)
    new tf.FileComparisonTest("getLayers test 7", ConnectorGetLayersTest7, connectorSequence)
    new tf.FileComparisonTest("getLayers test 8", ConnectorGetLayersTest8, connectorSequence)
    new tf.FileComparisonTest("getLayers test 9", ConnectorGetLayersTest9, connectorSequence)
    new tf.FileComparisonTest("getLayers test 10", ConnectorGetLayersTest10, connectorSequence)
    new tf.FileComparisonTest("getLayers test 11", ConnectorGetLayersTest11, connectorSequence)
    new tf.FileComparisonTest("getLayers test 12", ConnectorGetLayersTest12, connectorSequence)
    new tf.FileComparisonTest("getLayers test 13", ConnectorGetLayersTest13, connectorSequence)
}

function ConnectorCreationTest1(resolve) {
    let svg = SVG(window.document.createElement("div"))
    let connector = new UMLWebWidget.Connector(svg)
    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest1(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(20, 20)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.LeftCenter)
    connectionPoint2.move(60, 20)
    let connector = new UMLWebWidget.Connector(svg, "inheritance", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest1.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest1.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest1.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest2(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(60, 20)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.RightCenter)
    connectionPoint2.move(20, 20)
    let connector = new UMLWebWidget.Connector(svg, "inheritance", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest2.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest2.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest2.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest3(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(20, 20)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.TopCenter)
    connectionPoint2.move(20, 60)
    let connector = new UMLWebWidget.Connector(svg, "inheritance", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest3.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest3.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest3.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest4(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(20, 60)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.BottomCenter)
    connectionPoint2.move(20, 20)
    let connector = new UMLWebWidget.Connector(svg, "inheritance", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest4.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest4.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest4.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest5(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(20, 20)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.LeftCenter)
    connectionPoint2.move(60, 30)
    let connector = new UMLWebWidget.Connector(svg, "inheritance", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest5.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest5.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest5.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest6(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(20, 30)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.LeftCenter)
    connectionPoint2.move(60, 20)
    let connector = new UMLWebWidget.Connector(svg, "inheritance", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest6.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest6.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest6.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest7(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(20, 20)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.TopCenter)
    connectionPoint2.move(30, 60)
    let connector = new UMLWebWidget.Connector(svg, "inheritance", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest7.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest7.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest7.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest8(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(30, 20)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.TopCenter)
    connectionPoint2.move(20, 60)
    let connector = new UMLWebWidget.Connector(svg, "inheritance", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest8.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest8.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest8.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest9(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(20, 20)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.LeftCenter)
    connectionPoint2.move(60, 20)
    let connector = new UMLWebWidget.Connector(svg, "composition", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest9.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest9.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest9.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest10(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(20, 20)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.TopCenter)
    connectionPoint2.move(20, 60)
    let connector = new UMLWebWidget.Connector(svg, "composition", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest10.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest10.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest10.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest11(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(20, 20)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.LeftCenter)
    connectionPoint2.move(60, 20)
    let connector = new UMLWebWidget.Connector(svg, "aggregation", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest11.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest11.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest11.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest12(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(20, 20)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.TopCenter)
    connectionPoint2.move(20, 60)
    let connector = new UMLWebWidget.Connector(svg, "aggregation", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest12.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest12.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest12.html")

    resolve(tf.TestResultOutcome.ePassed)
}

function ConnectorGetLayersTest13(resolve, reject, test) {
    let svg = SVG(window.document.createElement("div"))

    let connectionPoint1 = new UMLWebWidget.ConnectionPoint(svg, null)
    connectionPoint1.move(20, 20)
    let connectionPoint2 = new UMLWebWidget.ConnectionPoint(svg, null, UMLWebWidget.ConnectionPointPosition.TopCenter)
    connectionPoint2.move(60, 20)
    let connector = new UMLWebWidget.Connector(svg, "returnmessage", connectionPoint1, connectionPoint2)

    let layers = connector.getLayers()
    layers.getLayer("shape").write()
    layers.getLayer("text").write()

    TestUtils.exportSVGToHTML(svg, __dirname + "/output/connectortests/ConnectorGetLayersTest13.html", true)

    test.setOutputFilePath(__dirname + "/output/connectortests/ConnectorGetLayersTest13.html")
    test.setReferenceFilePath(__dirname + "/reference/connectortests/ConnectorGetLayersTest13.html")

    resolve(tf.TestResultOutcome.ePassed)
}
