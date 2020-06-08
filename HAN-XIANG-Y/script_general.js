(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['MainViewer'];
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['MainViewer']);
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            var p = n != undefined ? o['getObjective'](n, m) : o['get'](m);
                            if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                p += 0x1;
                            return p;
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"mouseWheelEnabled":true,"vrPolyfillScale":0.75,"children":["this.MainViewer"],"height":"100%","id":"rootPlayer","scrollBarWidth":10,"scripts":{"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizFinish":TDV.Tour.Script.quizFinish,"mixObject":TDV.Tour.Script.mixObject,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getOverlays":TDV.Tour.Script.getOverlays,"initQuiz":TDV.Tour.Script.initQuiz,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizStart":TDV.Tour.Script.quizStart,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"initGA":TDV.Tour.Script.initGA,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"cloneCamera":TDV.Tour.Script.cloneCamera,"init":TDV.Tour.Script.init,"historyGoForward":TDV.Tour.Script.historyGoForward,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setValue":TDV.Tour.Script.setValue,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getKey":TDV.Tour.Script.getKey,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPixels":TDV.Tour.Script.getPixels,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playAudioList":TDV.Tour.Script.playAudioList,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"existsKey":TDV.Tour.Script.existsKey,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"translate":TDV.Tour.Script.translate,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"shareSocial":TDV.Tour.Script.shareSocial,"unregisterKey":TDV.Tour.Script.unregisterKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"registerKey":TDV.Tour.Script.registerKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"resumePlayers":TDV.Tour.Script.resumePlayers,"openLink":TDV.Tour.Script.openLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia},"scrollBarOpacity":0.5,"minWidth":20,"desktopMipmappingEnabled":false,"scrollBarVisible":"rollOver","start":"this.init()","contentOpaque":false,"gap":10,"defaultVRPointer":"laser","borderSize":0,"paddingTop":0,"width":"100%","backgroundPreloadEnabled":true,"propagateClick":false,"overflow":"hidden","shadow":false,"layout":"absolute","definitions": [{"vfov":180,"class":"Panorama","partial":false,"data":{"label":"DJI_0001-3"},"label":trans('panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C.label'),"id":"panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C","frames":[{"thumbnailUrl":"media/panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C_t.jpg","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C_0/{face}/0/{row}_{column}.jpg","colCount":96,"class":"TiledImageResourceLevel","width":49152,"tags":"ondemand","height":8192,"rowCount":16},{"url":"media/panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C_0/{face}/1/{row}_{column}.jpg","colCount":48,"class":"TiledImageResourceLevel","width":24576,"tags":"ondemand","height":4096,"rowCount":8},{"url":"media/panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C_0/{face}/2/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","width":12288,"tags":"ondemand","height":2048,"rowCount":4},{"url":"media/panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C_0/{face}/3/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","width":6144,"tags":"ondemand","height":1024,"rowCount":2},{"url":"media/panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C_0/{face}/4/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"],"height":512,"rowCount":1},{"url":"media/panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C_0/{face}/vr/0.jpg","colCount":6,"class":"TiledImageResourceLevel","width":9216,"tags":"mobilevr","height":1536,"rowCount":1}]},"class":"CubicPanoramaFrame"}],"hfov":360,"pitch":0,"hfovMax":130,"thumbnailUrl":"media/panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C_t.jpg"},{"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"viewerArea":"this.MainViewer"},{"toolTipPaddingBottom":4,"progressBarBorderColor":"#000000","id":"MainViewer","toolTipFontSize":"1.11vmin","subtitlesTextShadowVerticalLength":1,"subtitlesPaddingTop":5,"subtitlesFontSize":"3vmin","vrPointerColor":"#FFFFFF","progressBarOpacity":1,"subtitlesBackgroundColor":"#000000","toolTipPaddingLeft":6,"minWidth":100,"playbackBarHeadShadowBlurRadius":3,"width":"100%","playbackBarBackgroundOpacity":1,"transitionMode":"blending","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorRatios":[0],"progressBackgroundColorDirection":"vertical","subtitlesTextDecoration":"none","playbackBarProgressOpacity":1,"subtitlesTop":0,"playbackBarHeadBorderSize":0,"progressLeft":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesFontFamily":"Arial","toolTipShadowVerticalLength":0,"playbackBarBorderSize":0,"displayTooltipInTouchScreens":true,"paddingTop":0,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderRadius":0,"toolTipBorderColor":"#767676","playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingTop":4,"playbackBarBottom":5,"shadow":false,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"vertical","toolTipShadowColor":"#333333","subtitlesBorderSize":0,"subtitlesPaddingRight":5,"subtitlesBottom":50,"playbackBarHeight":10,"toolTipShadowSpread":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadow":true,"toolTipBorderRadius":3,"height":"100%","subtitlesTextShadowColor":"#000000","paddingRight":0,"borderRadius":0,"progressBackgroundOpacity":1,"progressBackgroundColorRatios":[0],"progressRight":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBackgroundColorRatios":[0,1],"class":"ViewerArea","doubleClickAction":"toggle_fullscreen","playbackBarLeft":0,"subtitlesOpacity":1,"toolTipFontColor":"#606060","playbackBarOpacity":1,"progressBarBorderSize":0,"progressOpacity":1,"subtitlesPaddingBottom":5,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarHeadShadowVerticalLength":0,"toolTipShadowHorizontalLength":0,"playbackBarHeadHeight":15,"toolTipFontWeight":"normal","toolTipFontStyle":"normal","toolTipPaddingRight":6,"playbackBarHeadOpacity":1,"toolTipBackgroundColor":"#F6F6F6","subtitlesBorderColor":"#FFFFFF","progressBorderSize":0,"subtitlesShadow":false,"subtitlesPaddingLeft":5,"toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowBlurRadius":0,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowOpacity":0,"playbackBarHeadBorderRadius":0,"vrPointerSelectionTime":2000,"borderSize":0,"propagateClick":false,"progressHeight":10,"toolTipBorderSize":1,"toolTipDisplayTime":600,"playbackBarProgressBackgroundColorRatios":[0],"progressBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderSize":0,"subtitlesGap":0,"toolTipShadowBlurRadius":3,"playbackBarBorderColor":"#FFFFFF","progressBorderRadius":0,"playbackBarBorderRadius":0,"playbackBarHeadWidth":6,"subtitlesFontWeight":"normal","subtitlesBackgroundOpacity":0.2,"toolTipOpacity":1,"paddingBottom":0,"firstTransitionDuration":0,"subtitlesTextShadowOpacity":1,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"progressBottom":0,"subtitlesVerticalAlign":"bottom","paddingLeft":0,"playbackBarHeadBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","transitionDuration":500,"playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"minHeight":50,"playbackBarHeadBackgroundColor":["#111111","#666666"]},{"items":[{"media":"this.panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C_camera"}],"id":"mainPlayList","class":"PlayList"},{"initialSequence":"this.sequence_442D2E42_4F14_5849_41D1_194275CCDD0D","initialPosition":{"yaw":-26.38,"class":"PanoramaCameraPosition","pitch":-46.98},"class":"PanoramaCamera","automaticZoomSpeed":10,"automaticRotationSpeed":12,"id":"panorama_4357B717_4F14_C9F7_41C6_6C2784A9789C_camera"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_442D2E42_4F14_5849_41D1_194275CCDD0D","restartMovementOnUserInteraction":false}],"scrollBarMargin":2,"downloadEnabled":false,"paddingBottom":0,"mobileMipmappingEnabled":false,"borderRadius":0,"paddingRight":0,"class":"Player","paddingLeft":0,"verticalAlign":"top","mediaActivationMode":"window","scrollBarColor":"#000000","minHeight":20,"horizontalAlign":"left","data":{"name":"Player500","defaultLocale":"zh","locales":{"zh":"locale/zh.txt"}}};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.1.5.js.map
//Generated with v2020.1.5, Tue May 26 2020