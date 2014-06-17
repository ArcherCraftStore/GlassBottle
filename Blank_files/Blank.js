// Created by iWeb 3.0.4 local-build-20140617

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,265),url:'Blank_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Blank_files/stroke_1.png'},{rect:new IWRect(2,-2,257,4),url:'Blank_files/stroke_2.png'},{rect:new IWRect(259,-2,4,4),url:'Blank_files/stroke_3.png'},{rect:new IWRect(259,2,4,265),url:'Blank_files/stroke_4.png'},{rect:new IWRect(259,267,4,4),url:'Blank_files/stroke_5.png'},{rect:new IWRect(2,267,257,4),url:'Blank_files/stroke_6.png'},{rect:new IWRect(-2,267,4,4),url:'Blank_files/stroke_7.png'}],new IWSize(261,269))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Blank_files/BlankMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
