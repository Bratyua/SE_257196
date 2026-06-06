var HS=Object.defineProperty,zS=Object.defineProperties;var $S=Object.getOwnPropertyDescriptors;var Kv=Object.getOwnPropertySymbols;var WS=Object.prototype.hasOwnProperty,GS=Object.prototype.propertyIsEnumerable;var Xv=(t,n,e)=>n in t?HS(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,C=(t,n)=>{for(var e in n||={})WS.call(n,e)&&Xv(t,e,n[e]);if(Kv)for(var e of Kv(n))GS.call(n,e)&&Xv(t,e,n[e]);return t},te=(t,n)=>zS(t,$S(n));var kt=null,bc=!1,Ef=1,qS=null,nt=Symbol("SIGNAL");function K(t){let n=kt;return kt=t,n}function yc(){return kt}var Xi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ji(t){if(bc)throw new Error("");if(kt===null)return;kt.consumerOnSignalRead(t);let n=kt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=kt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:kt.producers,e!==void 0&&e.producer===t)){kt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===kt&&(!i||YS(r,kt)))return;let o=Oo(kt),a={producer:t,consumer:kt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};kt.producersTail=a,n!==void 0?n.nextProducer=a:kt.producers=a,o&&nb(t,a)}function Jv(){Ef++}function Ar(t){if(!(Oo(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Ef)){if(!t.producerMustRecompute(t)&&!No(t)){Ao(t);return}t.producerRecomputeValue(t),Ao(t)}}function Sf(t){if(t.consumers===void 0)return;let n=bc;bc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||QS(i)}}finally{bc=n}}function If(){return kt?.consumerAllowSignalWrites!==!1}function QS(t){t.dirty=!0,Sf(t),t.consumerMarkedDirty?.(t)}function Ao(t){t.dirty=!1,t.lastCleanEpoch=Ef}function Di(t){return t&&eb(t),K(t)}function eb(t){t.producersTail=void 0,t.recomputing=!0}function er(t,n){K(n),t&&tb(t)}function tb(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Oo(t))do e=Mf(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function No(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Ar(e),i!==e.version))return!0}return!1}function tr(t){if(Oo(t)){let n=t.producers;for(;n!==void 0;)n=Mf(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function nb(t,n){let e=t.consumersTail,i=Oo(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)nb(r.producer,r)}function Mf(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Oo(n)){let o=n.producers;for(;o!==void 0;)o=Mf(o)}return e}function Oo(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function fs(t){qS?.(t)}function YS(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function hs(t,n){return Object.is(t,n)}function ps(t,n){let e=Object.create(ZS);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Ar(e),Ji(e),e.value===Qn)throw e.error;return e.value};return i[nt]=e,fs(e),i}var kr=Symbol("UNSET"),Rr=Symbol("COMPUTING"),Qn=Symbol("ERRORED"),ZS=te(C({},Xi),{value:kr,dirty:!0,error:null,equal:hs,kind:"computed",producerMustRecompute(t){return t.value===kr||t.value===Rr},producerRecomputeValue(t){if(t.value===Rr)throw new Error("");let n=t.value;t.value=Rr;let e=Di(t),i,r=!1;try{i=t.computation(),K(null),r=n!==kr&&n!==Qn&&i!==Qn&&t.equal(n,i)}catch(o){i=Qn,t.error=o}finally{er(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function KS(){throw new Error}var ib=KS;function rb(t){ib(t)}function Tf(t){ib=t}var XS=null;function kf(t,n){let e=Object.create(gs);e.value=t,n!==void 0&&(e.equal=n);let i=()=>ob(e);return i[nt]=e,fs(e),[i,a=>Nr(e,a),a=>wc(e,a)]}function ob(t){return Ji(t),t.value}function Nr(t,n){If()||rb(t),t.equal(t.value,n)||(t.value=n,JS(t))}function wc(t,n){If()||rb(t),Nr(t,n(t.value))}var gs=te(C({},Xi),{equal:hs,value:void 0,kind:"signal"});function JS(t){t.version++,Jv(),Sf(t),XS?.(t)}var Rf=te(C({},Xi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Af(t){if(t.dirty=!1,t.version>0&&!No(t))return;t.version++;let n=Di(t);try{t.cleanup(),t.fn()}finally{er(t,n)}}function he(t){return typeof t=="function"}function Fo(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Cc=Fo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Or(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var oe=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(he(i))try{i()}catch(o){n=o instanceof Cc?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{ab(o)}catch(a){n=n??[],a instanceof Cc?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Cc(n)}}add(n){var e;if(n&&n!==this)if(this.closed)ab(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Or(e,n)}remove(n){let{_finalizers:e}=this;e&&Or(e,n),n instanceof t&&n._removeParent(this)}};oe.EMPTY=(()=>{let t=new oe;return t.closed=!0,t})();var Nf=oe.EMPTY;function xc(t){return t instanceof oe||t&&"closed"in t&&he(t.remove)&&he(t.add)&&he(t.unsubscribe)}function ab(t){he(t)?t():t.unsubscribe()}var In={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Po={setTimeout(t,n,...e){let{delegate:i}=Po;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Po;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Dc(t){Po.setTimeout(()=>{let{onUnhandledError:n}=In;if(n)n(t);else throw t})}function _s(){}var sb=Of("C",void 0,void 0);function lb(t){return Of("E",void 0,t)}function cb(t){return Of("N",t,void 0)}function Of(t,n,e){return{kind:t,value:n,error:e}}var Fr=null;function Lo(t){if(In.useDeprecatedSynchronousErrorHandling){let n=!Fr;if(n&&(Fr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Fr;if(Fr=null,e)throw i}}else t()}function db(t){In.useDeprecatedSynchronousErrorHandling&&Fr&&(Fr.errorThrown=!0,Fr.error=t)}var Pr=class extends oe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,xc(n)&&n.add(this)):this.destination=nI}static create(n,e,i){return new Ei(n,e,i)}next(n){this.isStopped?Pf(cb(n),this):this._next(n)}error(n){this.isStopped?Pf(lb(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Pf(sb,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},eI=Function.prototype.bind;function Ff(t,n){return eI.call(t,n)}var Lf=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Ec(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Ec(i)}else Ec(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Ec(e)}}},Ei=class extends Pr{constructor(n,e,i){super();let r;if(he(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&In.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Ff(n.next,o),error:n.error&&Ff(n.error,o),complete:n.complete&&Ff(n.complete,o)}):r=n}this.destination=new Lf(r)}};function Ec(t){In.useDeprecatedSynchronousErrorHandling?db(t):Dc(t)}function tI(t){throw t}function Pf(t,n){let{onStoppedNotification:e}=In;e&&Po.setTimeout(()=>e(t,n))}var nI={closed:!0,next:_s,error:tI,complete:_s};var Vo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Xt(t){return t}function Vf(...t){return Bf(t)}function Bf(t){return t.length===0?Xt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var ie=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=rI(e)?e:new Ei(e,i,r);return Lo(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=ub(i),new i((r,o)=>{let a=new Ei({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Vo](){return this}pipe(...e){return Bf(e)(this)}toPromise(e){return e=ub(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function ub(t){var n;return(n=t??In.Promise)!==null&&n!==void 0?n:Promise}function iI(t){return t&&he(t.next)&&he(t.error)&&he(t.complete)}function rI(t){return t&&t instanceof Pr||iI(t)&&xc(t)}function jf(t){return he(t?.lift)}function de(t){return n=>{if(jf(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function le(t,n,e,i,r){return new Uf(t,n,e,i,r)}var Uf=class extends Pr{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};function mb(){return de((t,n)=>{let e=null;t._refCount++;let i=le(n,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){e=null;return}let r=t._connection,o=e;e=null,r&&(!o||r===o)&&r.unsubscribe(),n.unsubscribe()});t.subscribe(i),i.closed||(e=t.connect())})}var vs=class extends ie{constructor(n,e){super(),this.source=n,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,jf(n)&&(this.lift=n.lift)}_subscribe(n){return this.getSubject().subscribe(n)}getSubject(){let n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:n}=this;this._subject=this._connection=null,n?.unsubscribe()}connect(){let n=this._connection;if(!n){n=this._connection=new oe;let e=this.getSubject();n.add(this.source.subscribe(le(e,void 0,()=>{this._teardown(),e.complete()},i=>{this._teardown(),e.error(i)},()=>this._teardown()))),n.closed&&(this._connection=null,n=oe.EMPTY)}return n}refCount(){return mb()(this)}};var Bo={schedule(t){let n=requestAnimationFrame,e=cancelAnimationFrame,{delegate:i}=Bo;i&&(n=i.requestAnimationFrame,e=i.cancelAnimationFrame);let r=n(o=>{e=void 0,t(o)});return new oe(()=>e?.(r))},requestAnimationFrame(...t){let{delegate:n}=Bo;return(n?.requestAnimationFrame||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){let{delegate:n}=Bo;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...t)},delegate:void 0};var fb=Fo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var M=(()=>{class t extends ie{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Sc(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new fb}next(e){Lo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Lo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Lo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Nf:(this.currentObservers=null,o.push(e),new oe(()=>{this.currentObservers=null,Or(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new ie;return e.source=this,e}}return t.create=(n,e)=>new Sc(n,e),t})(),Sc=class extends M{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Nf}};var Xe=class extends M{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var bs={now(){return(bs.delegate||Date).now()},delegate:void 0};var Ic=class extends M{constructor(n=1/0,e=1/0,i=bs){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var Mc=class extends oe{constructor(n,e){super()}schedule(n,e=0){return this}};var ys={setInterval(t,n,...e){let{delegate:i}=ys;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=ys;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var nr=class extends Mc{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return ys.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&ys.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Or(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var oI=1,Hf,zf={};function hb(t){return t in zf?(delete zf[t],!0):!1}var pb={setImmediate(t){let n=oI++;return zf[n]=!0,Hf||(Hf=Promise.resolve()),Hf.then(()=>hb(n)&&t()),n},clearImmediate(t){hb(t)}};var{setImmediate:aI,clearImmediate:sI}=pb,ws={setImmediate(...t){let{delegate:n}=ws;return(n?.setImmediate||aI)(...t)},clearImmediate(t){let{delegate:n}=ws;return(n?.clearImmediate||sI)(t)},delegate:void 0};var Tc=class extends nr{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=ws.setImmediate(n.flush.bind(n,void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(ws.clearImmediate(e),n._scheduled===e&&(n._scheduled=void 0))}};var jo=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};jo.now=bs.now;var ir=class extends jo{constructor(n,e=jo.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var kc=class extends ir{flush(n){this._active=!0;let e=this._scheduled;this._scheduled=void 0;let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var Rc=new kc(Tc);var Cs=new ir(nr),gb=Cs;var Ac=class extends nr{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=Bo.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&e===n._scheduled&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(Bo.cancelAnimationFrame(e),n._scheduled=void 0)}};var Nc=class extends ir{flush(n){this._active=!0;let e;n?e=n.id:(e=this._scheduled,this._scheduled=void 0);let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var Oc=new Nc(Ac);var Ye=new ie(t=>t.complete());function Fc(t){return t&&he(t.schedule)}function $f(t){return t[t.length-1]}function Pc(t){return he($f(t))?t.pop():void 0}function Yn(t){return Fc($f(t))?t.pop():void 0}function _b(t,n){return typeof $f(t)=="number"?t.pop():n}function bb(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{c(i.next(u))}catch(h){a(h)}}function l(u){try{c(i.throw(u))}catch(h){a(h)}}function c(u){u.done?o(u.value):r(u.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function vb(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Lr(t){return this instanceof Lr?(this.v=t,this):new Lr(t)}function yb(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(_){return function(b){return Promise.resolve(b).then(_,h)}}function s(_,b){i[_]&&(r[_]=function(S){return new Promise(function(I,T){o.push([_,S,I,T])>1||l(_,S)})},b&&(r[_]=b(r[_])))}function l(_,b){try{c(i[_](b))}catch(S){g(o[0][3],S)}}function c(_){_.value instanceof Lr?Promise.resolve(_.value.v).then(u,h):g(o[0][2],_)}function u(_){l("next",_)}function h(_){l("throw",_)}function g(_,b){_(b),o.shift(),o.length&&l(o[0][0],o[0][1])}}function wb(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof vb=="function"?vb(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var Lc=t=>t&&typeof t.length=="number"&&typeof t!="function";function Vc(t){return he(t?.then)}function Bc(t){return he(t[Vo])}function jc(t){return Symbol.asyncIterator&&he(t?.[Symbol.asyncIterator])}function Uc(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function lI(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Hc=lI();function zc(t){return he(t?.[Hc])}function $c(t){return yb(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Lr(e.read());if(r)return yield Lr(void 0);yield yield Lr(i)}}finally{e.releaseLock()}})}function Wc(t){return he(t?.getReader)}function He(t){if(t instanceof ie)return t;if(t!=null){if(Bc(t))return cI(t);if(Lc(t))return dI(t);if(Vc(t))return uI(t);if(jc(t))return Cb(t);if(zc(t))return mI(t);if(Wc(t))return fI(t)}throw Uc(t)}function cI(t){return new ie(n=>{let e=t[Vo]();if(he(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function dI(t){return new ie(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function uI(t){return new ie(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Dc)})}function mI(t){return new ie(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Cb(t){return new ie(n=>{hI(t,n).catch(e=>n.error(e))})}function fI(t){return Cb($c(t))}function hI(t,n){var e,i,r,o;return bb(this,void 0,void 0,function*(){try{for(e=wb(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Gt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Gc(t,n=0){return de((e,i)=>{e.subscribe(le(i,r=>Gt(i,t,()=>i.next(r),n),()=>Gt(i,t,()=>i.complete(),n),r=>Gt(i,t,()=>i.error(r),n)))})}function qc(t,n=0){return de((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function xb(t,n){return He(t).pipe(qc(n),Gc(n))}function Db(t,n){return He(t).pipe(qc(n),Gc(n))}function Eb(t,n){return new ie(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Sb(t,n){return new ie(e=>{let i;return Gt(e,n,()=>{i=t[Hc](),Gt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>he(i?.return)&&i.return()})}function Qc(t,n){if(!t)throw new Error("Iterable cannot be null");return new ie(e=>{Gt(e,n,()=>{let i=t[Symbol.asyncIterator]();Gt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Ib(t,n){return Qc($c(t),n)}function Mb(t,n){if(t!=null){if(Bc(t))return xb(t,n);if(Lc(t))return Eb(t,n);if(Vc(t))return Db(t,n);if(jc(t))return Qc(t,n);if(zc(t))return Sb(t,n);if(Wc(t))return Ib(t,n)}throw Uc(t)}function $e(t,n){return n?Mb(t,n):He(t)}function W(...t){let n=Yn(t);return $e(t,n)}function xs(t,n){let e=he(t)?t:()=>t,i=r=>r.error(e());return new ie(n?r=>n.schedule(i,0,r):i)}function Vr(t){return!!t&&(t instanceof ie||he(t.lift)&&he(t.subscribe))}var Br=Fo(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Tb(t){return t instanceof Date&&!isNaN(t)}function ue(t,n){return de((e,i)=>{let r=0;e.subscribe(le(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:pI}=Array;function gI(t,n){return pI(n)?t(...n):t(n)}function Yc(t){return ue(n=>gI(t,n))}var{isArray:_I}=Array,{getPrototypeOf:vI,prototype:bI,keys:yI}=Object;function Zc(t){if(t.length===1){let n=t[0];if(_I(n))return{args:n,keys:null};if(wI(n)){let e=yI(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function wI(t){return t&&typeof t=="object"&&vI(t)===bI}function Kc(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function jr(...t){let n=Yn(t),e=Pc(t),{args:i,keys:r}=Zc(t);if(i.length===0)return $e([],n);let o=new ie(CI(i,n,r?a=>Kc(r,a):Xt));return e?o.pipe(Yc(e)):o}function CI(t,n,e=Xt){return i=>{kb(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)kb(n,()=>{let c=$e(t[l],n),u=!1;c.subscribe(le(i,h=>{o[l]=h,u||(u=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function kb(t,n,e){t?Gt(e,t,n):n()}function Rb(t,n,e,i,r,o,a,s){let l=[],c=0,u=0,h=!1,g=()=>{h&&!l.length&&!c&&n.complete()},_=S=>c<i?b(S):l.push(S),b=S=>{o&&n.next(S),c++;let I=!1;He(e(S,u++)).subscribe(le(n,T=>{r?.(T),o?_(T):n.next(T)},()=>{I=!0},void 0,()=>{if(I)try{for(c--;l.length&&c<i;){let T=l.shift();a?Gt(n,a,()=>b(T)):b(T)}g()}catch(T){n.error(T)}}))};return t.subscribe(le(n,_,()=>{h=!0,g()})),()=>{s?.()}}function Rt(t,n,e=1/0){return he(n)?Rt((i,r)=>ue((o,a)=>n(i,o,r,a))(He(t(i,r))),e):(typeof n=="number"&&(e=n),de((i,r)=>Rb(i,r,t,e)))}function rr(t=1/0){return Rt(Xt,t)}function Ab(){return rr(1)}function Uo(...t){return Ab()($e(t,Yn(t)))}function Ur(t){return new ie(n=>{He(t()).subscribe(n)})}function Ds(...t){let n=Pc(t),{args:e,keys:i}=Zc(t),r=new ie(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let u=0;u<a;u++){let h=!1;He(e[u]).subscribe(le(o,g=>{h||(h=!0,c--),s[u]=g},()=>l--,void 0,()=>{(!l||!h)&&(c||o.next(i?Kc(i,s):s),o.complete())}))}});return n?r.pipe(Yc(n)):r}function Es(t=0,n,e=gb){let i=-1;return n!=null&&(Fc(n)?e=n:i=n),new ie(r=>{let o=Tb(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function At(...t){let n=Yn(t),e=_b(t,1/0),i=t;return i.length?i.length===1?He(i[0]):rr(e)($e(i,n)):Ye}function Ne(t,n){return de((e,i)=>{let r=0;e.subscribe(le(i,o=>t.call(n,o,r++)&&i.next(o)))})}function Nb(t){return de((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(le(e,c=>{i=!0,r=c,o||He(t(c)).subscribe(o=le(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function Ho(t,n=Cs){return Nb(()=>Es(t,n))}function ut(t){return de((n,e)=>{let i=null,r=!1,o;i=n.subscribe(le(e,void 0,void 0,a=>{o=He(t(a,ut(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Hr(t,n){return he(n)?Rt(t,n,1):Rt(t,1)}function zr(t,n=Cs){return de((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,u=n.now();if(u<c){r=this.schedule(void 0,c-u),i.add(r);return}s()}e.subscribe(le(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function Ob(t){return de((n,e)=>{let i=!1;n.subscribe(le(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function Jt(t){return t<=0?()=>Ye:de((n,e)=>{let i=0;n.subscribe(le(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Xc(t,n=Xt){return t=t??xI,de((e,i)=>{let r,o=!0;e.subscribe(le(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function xI(t,n){return t===n}function Fb(t=DI){return de((n,e)=>{let i=!1;n.subscribe(le(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function DI(){return new Br}function or(t){return de((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Si(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Ne((r,o)=>t(r,o,i)):Xt,Jt(1),e?Ob(n):Fb(()=>new Br))}function Jc(t){return t<=0?()=>Ye:de((n,e)=>{let i=[];n.subscribe(le(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function ed(){return de((t,n)=>{let e,i=!1;t.subscribe(le(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Ss(t={}){let{connector:n=()=>new M,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,u=!1,h=!1,g=()=>{s?.unsubscribe(),s=void 0},_=()=>{g(),a=l=void 0,u=h=!1},b=()=>{let S=a;_(),S?.unsubscribe()};return de((S,I)=>{c++,!h&&!u&&g();let T=l=l??n();I.add(()=>{c--,c===0&&!h&&!u&&(s=Wf(b,r))}),T.subscribe(I),!a&&c>0&&(a=new Ei({next:ve=>T.next(ve),error:ve=>{h=!0,g(),s=Wf(_,e,ve),T.error(ve)},complete:()=>{u=!0,g(),s=Wf(_,i),T.complete()}}),He(S).subscribe(a))})(o)}}function Wf(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Ei({next:()=>{i.unsubscribe(),t()}});return He(n(...e)).subscribe(i)}function td(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Ss({connector:()=>new Ic(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Is(t){return Ne((n,e)=>t<=e)}function Et(...t){let n=Yn(t);return de((e,i)=>{(n?Uo(t,e,n):Uo(t,e)).subscribe(i)})}function it(t,n){return de((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(le(i,l=>{r?.unsubscribe();let c=0,u=o++;He(t(l,u)).subscribe(r=le(i,h=>i.next(n?n(l,h,u,c++):h),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function we(t){return de((n,e)=>{He(t).subscribe(le(e,()=>e.complete(),_s)),!e.closed&&n.subscribe(e)})}function Gf(t,n=!1){return de((e,i)=>{let r=0;e.subscribe(le(i,o=>{let a=t(o,r++);(a||n)&&i.next(o),!a&&i.complete()}))})}function Ve(t,n,e){let i=he(t)||n||e?{next:t,error:n,complete:e}:t;return i?de((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(le(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Xt}var qf;function nd(){return qf}function Zn(t){let n=qf;return qf=t,n}var Pb=Symbol("NotFound");function zo(t){return t===Pb||t?.name==="\u0275NotFound"}function Qf(t,n,e){let i=Object.create(EI);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Ar(i),Ji(i),i.value===Qn)throw i.error;return i.value};return o[nt]=i,fs(i),o}function Lb(t,n){Ar(t),Nr(t,n),Ao(t)}function Vb(t,n){if(Ar(t),t.value===Qn)throw t.error;wc(t,n),Ao(t)}var EI=te(C({},Xi),{value:kr,dirty:!0,error:null,equal:hs,kind:"linkedSignal",producerMustRecompute(t){return t.value===kr||t.value===Rr},producerRecomputeValue(t){if(t.value===Rr)throw new Error("");let n=t.value;t.value=Rr;let e=Di(t),i,r=!1;try{let o=t.source(),a=n!==kr&&n!==Qn,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,K(null),r=a&&i!==Qn&&t.equal(n,i)}catch(o){i=Qn,t.error=o}finally{er(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Bb(t){let n=K(null);try{return t()}finally{K(n)}}var cd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",k=class extends Error{code;constructor(n,e){super(Mi(n,e)),this.code=n}};function SI(t){return`NG0${Math.abs(t)}`}function Mi(t,n){return`${SI(t)}${n?": "+n:""}`}var lr=globalThis;function Pe(t){for(let n in t)if(t[n]===Pe)return n;throw Error("")}function $b(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Os(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Os).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function dd(t,n){return t?n?`${t} ${n}`:t:n||""}var II=Pe({__forward_ref__:Pe});function It(t){return t.__forward_ref__=It,t}function St(t){return sh(t)?t():t}function sh(t){return typeof t=="function"&&t.hasOwnProperty(II)&&t.__forward_ref__===It}function x(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function Q(t){return{providers:t.providers||[],imports:t.imports||[]}}function Fs(t){return MI(t,ud)}function lh(t){return Fs(t)!==null}function MI(t,n){return t.hasOwnProperty(n)&&t[n]||null}function TI(t){let n=t?.[ud]??null;return n||null}function Zf(t){return t&&t.hasOwnProperty(rd)?t[rd]:null}var ud=Pe({\u0275prov:Pe}),rd=Pe({\u0275inj:Pe}),y=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=x({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ch(t){return t&&!!t.\u0275providers}var dh=Pe({\u0275cmp:Pe}),uh=Pe({\u0275dir:Pe}),mh=Pe({\u0275pipe:Pe}),fh=Pe({\u0275mod:Pe}),Ts=Pe({\u0275fac:Pe}),Yr=Pe({__NG_ELEMENT_ID__:Pe}),jb=Pe({__NG_ENV_ID__:Pe});function hh(t){return md(t,"@NgModule"),t[fh]||null}function Ti(t){return md(t,"@Component"),t[dh]||null}function ph(t){return md(t,"@Directive"),t[uh]||null}function Wb(t){return md(t,"@Pipe"),t[mh]||null}function md(t,n){if(t==null)throw new k(-919,!1)}function Wo(t){return typeof t=="string"?t:t==null?"":String(t)}var Gb=Pe({ngErrorCode:Pe}),kI=Pe({ngErrorMessage:Pe}),RI=Pe({ngTokenPath:Pe});function gh(t,n){return qb("",-200,n)}function fd(t,n){throw new k(-201,!1)}function qb(t,n,e){let i=new k(n,t);return i[Gb]=n,i[kI]=t,e&&(i[RI]=e),i}function AI(t){return t[Gb]}var Kf;function Qb(){return Kf}function en(t){let n=Kf;return Kf=t,n}function _h(t,n,e){let i=Fs(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;fd(t,"")}var NI={},$r=NI,OI="__NG_DI_FLAG__",Xf=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Wr(e)||0;try{return this.injector.get(n,i&8?null:$r,i)}catch(r){if(zo(r))return r;throw r}}};function FI(t,n=0){let e=nd();if(e===void 0)throw new k(-203,!1);if(e===null)return _h(t,void 0,n);{let i=PI(n),r=e.retrieve(t,i);if(zo(r)){if(i.optional)return null;throw r}return r}}function H(t,n=0){return(Qb()||FI)(St(t),n)}function d(t,n){return H(t,Wr(n))}function Wr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function PI(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Jf(t){let n=[];for(let e=0;e<t.length;e++){let i=St(t[e]);if(Array.isArray(i)){if(i.length===0)throw new k(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=LI(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(H(r,o))}else n.push(H(i))}return n}function LI(t){return t[OI]}function Gr(t,n){let e=t.hasOwnProperty(Ts);return e?t[Ts]:null}function Yb(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Zb(t){return t.flat(Number.POSITIVE_INFINITY)}function hd(t,n){t.forEach(e=>Array.isArray(e)?hd(e,n):n(e))}function vh(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Ps(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Kb(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Xb(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function pd(t,n,e){let i=Go(t,n);return i>=0?t[i|1]=e:(i=~i,Xb(t,i,n,e)),i}function gd(t,n){let e=Go(t,n);if(e>=0)return t[e|1]}function Go(t,n){return VI(t,n,1)}function VI(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var cr={},Nt=[],dr=new y(""),bh=new y("",-1),yh=new y(""),ks=class{get(n,e=$r){if(e===$r){let r=qb("",-201);throw r.name="\u0275NotFound",r}return e}};function ki(t){return{\u0275providers:t}}function Jb(t){return ki([{provide:dr,multi:!0,useValue:t}])}function ey(...t){return{\u0275providers:wh(!0,t),\u0275fromNgModule:!0}}function wh(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return hd(n,a=>{let s=a;od(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&ty(r,o),e}function ty(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Ch(r,o=>{n(o,i)})}}function od(t,n,e,i){if(t=St(t),!t)return!1;let r=null,o=Zf(t),a=!o&&Ti(t);if(!o&&!a){let l=t.ngModule;if(o=Zf(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)od(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;hd(o.imports,u=>{od(u,n,e,i)&&(c||=[],c.push(u))}),c!==void 0&&ty(c,n)}if(!s){let c=Gr(r)||(()=>new r);n({provide:r,useFactory:c,deps:Nt},r),n({provide:yh,useValue:r,multi:!0},r),n({provide:dr,useValue:()=>H(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;Ch(l,u=>{n(u,c)})}}else return!1;return r!==t&&t.providers!==void 0}function Ch(t,n){for(let e of t)ch(e)&&(e=e.\u0275providers),Array.isArray(e)?Ch(e,n):n(e)}var BI=Pe({provide:String,useValue:Pe});function ny(t){return t!==null&&typeof t=="object"&&BI in t}function jI(t){return!!(t&&t.useExisting)}function UI(t){return!!(t&&t.useFactory)}function qr(t){return typeof t=="function"}function iy(t){return!!t.useClass}var Ls=new y(""),id={},Ub={},Yf;function qo(){return Yf===void 0&&(Yf=new ks),Yf}var Be=class{},Qr=class extends Be{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,th(n,a=>this.processProvider(a)),this.records.set(bh,$o(void 0,this)),r.has("environment")&&this.records.set(Be,$o(void 0,this));let o=this.records.get(Ls);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(yh,Nt,{self:!0}))}retrieve(n,e){let i=Wr(e)||0;try{return this.get(n,$r,i)}catch(r){if(zo(r))return r;throw r}}destroy(){Ms(this),this._destroyed=!0;let n=K(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),K(n)}}onDestroy(n){return Ms(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Ms(this);let e=Zn(this),i=en(void 0),r;try{return n()}finally{Zn(e),en(i)}}get(n,e=$r,i){if(Ms(this),n.hasOwnProperty(jb))return n[jb](this);let r=Wr(i),o,a=Zn(this),s=en(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let u=GI(n)&&Fs(n);u&&this.injectableDefInScope(u)?c=$o(eh(n),id):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?qo():this.parent;return e=r&8&&e===$r?null:e,l.get(n,e)}catch(l){let c=AI(l);throw c===-200||c===-201?new k(c,null):l}finally{en(s),Zn(a)}}resolveInjectorInitializers(){let n=K(null),e=Zn(this),i=en(void 0),r;try{let o=this.get(dr,Nt,{self:!0});for(let a of o)a()}finally{Zn(e),en(i),K(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=St(n);let e=qr(n)?n:St(n&&n.provide),i=zI(n);if(!qr(n)&&n.multi===!0){let r=this.records.get(e);r||(r=$o(void 0,id,!0),r.factory=()=>Jf(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=K(null);try{if(e.value===Ub)throw gh("");return e.value===id&&(e.value=Ub,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&WI(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{K(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=St(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function eh(t){let n=Fs(t),e=n!==null?n.factory:Gr(t);if(e!==null)return e;if(t instanceof y)throw new k(-204,!1);if(t instanceof Function)return HI(t);throw new k(-204,!1)}function HI(t){if(t.length>0)throw new k(-204,!1);let e=TI(t);return e!==null?()=>e.factory(t):()=>new t}function zI(t){if(ny(t))return $o(void 0,t.useValue);{let n=xh(t);return $o(n,id)}}function xh(t,n,e){let i;if(qr(t)){let r=St(t);return Gr(r)||eh(r)}else if(ny(t))i=()=>St(t.useValue);else if(UI(t))i=()=>t.useFactory(...Jf(t.deps||[]));else if(jI(t))i=(r,o)=>H(St(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=St(t&&(t.useClass||t.provide));if($I(t))i=()=>new r(...Jf(t.deps));else return Gr(r)||eh(r)}return i}function Ms(t){if(t.destroyed)throw new k(-205,!1)}function $o(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function $I(t){return!!t.deps}function WI(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function GI(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function th(t,n){for(let e of t)Array.isArray(e)?th(e,n):e&&ch(e)?th(e.\u0275providers,n):n(e)}function vt(t,n){let e;t instanceof Qr?(Ms(t),e=t):e=new Xf(t);let i,r=Zn(e),o=en(void 0);try{return n()}finally{Zn(r),en(o)}}function ry(){return Qb()!==void 0||nd()!=null}var Mn=0,J=1,ae=2,mt=3,mn=4,Vt=5,Zr=6,Qo=7,rt=8,Ri=9,Tn=10,je=11,Yo=12,Dh=13,Kr=14,Bt=15,ur=16,Xr=17,Xn=18,Ai=19,Eh=20,Ii=21,_d=22,ar=23,tn=24,Jr=25,mr=26,Je=27,oy=1,Sh=6,fr=7,Vs=8,eo=9,et=10;function Ni(t){return Array.isArray(t)&&typeof t[oy]=="object"}function kn(t){return Array.isArray(t)&&t[oy]===!0}function Ih(t){return(t.flags&4)!==0}function Jn(t){return t.componentOffset>-1}function Zo(t){return(t.flags&1)===1}function ei(t){return!!t.template}function Ko(t){return(t[ae]&512)!==0}function to(t){return(t[ae]&256)===256}var Mh="svg",ay="math";function fn(t){for(;Array.isArray(t);)t=t[Mn];return t}function Th(t,n){return fn(n[t])}function hn(t,n){return fn(n[t.index])}function vd(t,n){return t.data[n]}function sy(t,n){return t[n]}function pn(t,n){let e=n[t];return Ni(e)?e:e[Mn]}function ly(t){return(t[ae]&4)===4}function bd(t){return(t[ae]&128)===128}function cy(t){return kn(t[mt])}function nn(t,n){return n==null?null:t[n]}function kh(t){t[Xr]=0}function Rh(t){t[ae]&1024||(t[ae]|=1024,bd(t)&&no(t))}function dy(t,n){for(;t>0;)n=n[Kr],t--;return n}function Bs(t){return!!(t[ae]&9216||t[tn]?.dirty)}function yd(t){t[Tn].changeDetectionScheduler?.notify(8),t[ae]&64&&(t[ae]|=1024),Bs(t)&&no(t)}function no(t){t[Tn].changeDetectionScheduler?.notify(0);let n=sr(t);for(;n!==null&&!(n[ae]&8192||(n[ae]|=8192,!bd(n)));)n=sr(n)}function Ah(t,n){if(to(t))throw new k(911,!1);t[Ii]===null&&(t[Ii]=[]),t[Ii].push(n)}function uy(t,n){if(t[Ii]===null)return;let e=t[Ii].indexOf(n);e!==-1&&t[Ii].splice(e,1)}function sr(t){let n=t[mt];return kn(n)?n[mt]:n}function Nh(t){return t[Qo]??=[]}function Oh(t){return t.cleanup??=[]}function my(t,n,e,i){let r=Nh(n);r.push(e),t.firstCreatePass&&Oh(t).push(i,r.length-1)}var ge={lFrame:Ey(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var nh=!1;function fy(){return ge.lFrame.elementDepthCount}function hy(){ge.lFrame.elementDepthCount++}function Fh(){ge.lFrame.elementDepthCount--}function wd(){return ge.bindingsEnabled}function Ph(){return ge.skipHydrationRootTNode!==null}function Lh(t){return ge.skipHydrationRootTNode===t}function Vh(){ge.skipHydrationRootTNode=null}function re(){return ge.lFrame.lView}function We(){return ge.lFrame.tView}function G(t){return ge.lFrame.contextLView=t,t[rt]}function q(t){return ge.lFrame.contextLView=null,t}function ft(){let t=Bh();for(;t!==null&&t.type===64;)t=t.parent;return t}function Bh(){return ge.lFrame.currentTNode}function py(){let t=ge.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Xo(t,n){let e=ge.lFrame;e.currentTNode=t,e.isParent=n}function jh(){return ge.lFrame.isParent}function Uh(){ge.lFrame.isParent=!1}function gy(){return ge.lFrame.contextLView}function Hh(){return nh}function Rs(t){let n=nh;return nh=t,n}function _y(){let t=ge.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function vy(){return ge.lFrame.bindingIndex}function by(t){return ge.lFrame.bindingIndex=t}function Oi(){return ge.lFrame.bindingIndex++}function Cd(t){let n=ge.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function yy(){return ge.lFrame.inI18n}function wy(t,n){let e=ge.lFrame;e.bindingIndex=e.bindingRootIndex=t,xd(n)}function Cy(){return ge.lFrame.currentDirectiveIndex}function xd(t){ge.lFrame.currentDirectiveIndex=t}function xy(t){let n=ge.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Dd(){return ge.lFrame.currentQueryIndex}function js(t){ge.lFrame.currentQueryIndex=t}function qI(t){let n=t[J];return n.type===2?n.declTNode:n.type===1?t[Vt]:null}function zh(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=qI(o),r===null||(o=o[Kr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ge.lFrame=Dy();return i.currentTNode=n,i.lView=t,!0}function Ed(t){let n=Dy(),e=t[J];ge.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Dy(){let t=ge.lFrame,n=t===null?null:t.child;return n===null?Ey(t):n}function Ey(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Sy(){let t=ge.lFrame;return ge.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var $h=Sy;function Sd(){let t=Sy();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Iy(t){return(ge.lFrame.contextLView=dy(t,ge.lFrame.contextLView))[rt]}function ti(){return ge.lFrame.selectedIndex}function hr(t){ge.lFrame.selectedIndex=t}function Jo(){let t=ge.lFrame;return vd(t.tView,t.selectedIndex)}function ea(){ge.lFrame.currentNamespace=Mh}function My(){return ge.lFrame.currentNamespace}var Ty=!0;function Id(){return Ty}function Us(t){Ty=t}function ih(t,n=null,e=null,i){let r=Wh(t,n,e,i);return r.resolveInjectorInitializers(),r}function Wh(t,n=null,e=null,i,r=new Set){let o=[e||Nt,ey(t)],a;return new Qr(o,n||qo(),a||null,r)}var ce=class t{static THROW_IF_NOT_FOUND=$r;static NULL=new ks;static create(n,e){if(Array.isArray(n))return ih({name:""},e,n,"");{let i=n.name??"";return ih({name:i},n.parent,n.providers,i)}}static \u0275prov=x({token:t,providedIn:"any",factory:()=>H(bh)});static __NG_ELEMENT_ID__=-1},ee=new y(""),Ot=(()=>{class t{static __NG_ELEMENT_ID__=QI;static __NG_ENV_ID__=e=>e}return t})(),ad=class extends Ot{_lView;constructor(n){super(),this._lView=n}get destroyed(){return to(this._lView)}onDestroy(n){let e=this._lView;return Ah(e,n),()=>uy(e,n)}};function QI(){return new ad(re())}var ky=!1,Ry=new y(""),Fi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Xe(!1);debugTaskTracker=d(Ry,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ie(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=x({token:t,providedIn:"root",factory:()=>new t})}return t})(),rh=class extends M{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,ry()&&(this.destroyRef=d(Ot,{optional:!0})??void 0,this.pendingTasks=d(Fi,{optional:!0})??void 0)}emit(n){let e=K(null);try{super.next(n)}finally{K(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof oe&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},j=rh;function sd(...t){}function Gh(t){let n,e;function i(){t=sd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function Ay(t){return queueMicrotask(()=>t()),()=>{t=sd}}var qh="isAngularZone",As=qh+"_ID",YI=0,U=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new j(!1);onMicrotaskEmpty=new j(!1);onStable=new j(!1);onError=new j(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=ky}=n;if(typeof Zone>"u")throw new k(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,XI(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(qh)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new k(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new k(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,ZI,sd,sd);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},ZI={};function Qh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function KI(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Gh(()=>{t.callbackScheduled=!1,oh(t),t.isCheckStableRunning=!0,Qh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),oh(t)}function XI(t){let n=()=>{KI(t)},e=YI++;t._inner=t._inner.fork({name:"angular",properties:{[qh]:!0,[As]:e,[As+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(JI(l))return i.invokeTask(o,a,s,l);try{return Hb(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),zb(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return Hb(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!eM(l)&&n(),zb(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,oh(t),Qh(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function oh(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Hb(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function zb(t){t._nesting--,Qh(t)}var Ns=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new j;onMicrotaskEmpty=new j;onStable=new j;onError=new j;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function JI(t){return Ny(t,"__ignore_ng_zone__")}function eM(t){return Ny(t,"__scheduler_tick__")}function Ny(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Lt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},rn=new y("",{factory:()=>{let t=d(U),n=d(Be),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Lt),e.handleError(i))})}}}),Oy={provide:dr,useValue:()=>{let t=d(Lt,{optional:!0})},multi:!0},tM=new y("",{factory:()=>{let t=d(ee).defaultView;if(!t)return;let n=d(rn),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),d(Ot).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Yh(){return ki([Jb(()=>{d(tM)})])}function D(t,n){let[e,i,r]=kf(t,n?.equal),o=e,a=o[nt];return o.set=i,o.update=r,o.asReadonly=Md.bind(o),o}function Md(){let t=this[nt];if(t.readonlyFn===void 0){let n=()=>this();n[nt]=t,t.readonlyFn=n}return t.readonlyFn}var ta=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=nM}return t})();function nM(){return new ta(re(),ft())}var Kn=class{},Hs=new y("",{factory:()=>!0});var Zh=new y(""),na=(()=>{class t{internalPendingTasks=d(Fi);scheduler=d(Kn);errorHandler=d(rn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=x({token:t,providedIn:"root",factory:()=>new t})}return t})(),Td=(()=>{class t{static \u0275prov=x({token:t,providedIn:"root",factory:()=>new ah})}return t})(),ah=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},ld=class{[nt];constructor(n){this[nt]=n}destroy(){this[nt].destroy()}};function Pi(t,n){let e=n?.injector??d(ce),i=n?.manualCleanup!==!0?e.get(Ot):null,r,o=e.get(ta,null,{optional:!0}),a=e.get(Kn);return o!==null?(r=oM(o.view,a,t),i instanceof ad&&i._lView===o.view&&(i=null)):r=aM(t,e.get(Td),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new ld(r)}var Fy=te(C({},Rf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Rs(!1);try{Af(this)}finally{Rs(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=K(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],K(t)}}}),iM=te(C({},Fy),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(tr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),rM=te(C({},Fy),{consumerMarkedDirty(){this.view[ae]|=8192,no(this.view),this.notifier.notify(13)},destroy(){if(tr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[ar]?.delete(this)}});function oM(t,n,e){let i=Object.create(rM);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=Py(i,e),t[ar]??=new Set,t[ar].add(i),i.consumerMarkedDirty(i),i}function aM(t,n,e){let i=Object.create(iM);return i.fn=Py(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function Py(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Xs(t){return{toString:t}.toString()}function hM(t){return typeof t=="function"}function v0(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Vd=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Ue=(()=>{let t=()=>b0;return t.ngInherit=!0,t})();function b0(t){return t.type.prototype.ngOnChanges&&(t.setInput=gM),pM}function pM(){let t=w0(this),n=t?.current;if(n){let e=t.previous;if(e===cr)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function gM(t,n,e,i,r){let o=this.declaredInputs[i],a=w0(t)||_M(t,{previous:cr,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new Vd(c&&c.currentValue,e,l===cr),v0(t,n,r,e)}var y0="__ngSimpleChanges__";function w0(t){return t[y0]||null}function _M(t,n){return t[y0]=n}var Ly=[];var Le=function(t,n=null,e){for(let i=0;i<Ly.length;i++){let r=Ly[i];r(t,n,e)}},De=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(De||{});function vM(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=b0(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function C0(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function Od(t,n,e){x0(t,n,3,e)}function Fd(t,n,e,i){(t[ae]&3)===e&&x0(t,n,e,i)}function Kh(t,n){let e=t[ae];(e&3)===n&&(e&=16383,e+=1,t[ae]=e)}function x0(t,n,e,i){let r=i!==void 0?t[Xr]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[Xr]+=65536),(s<o||o==-1)&&(bM(t,e,n,l),t[Xr]=(t[Xr]&4294901760)+l+2),l++}function Vy(t,n){Le(De.LifecycleHookStart,t,n);let e=K(null);try{n.call(t)}finally{K(e),Le(De.LifecycleHookEnd,t,n)}}function bM(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[ae]>>14<t[Xr]>>16&&(t[ae]&3)===n&&(t[ae]+=16384,Vy(s,o)):Vy(s,o)}var ra=-1,ro=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function yM(t){return(t.flags&8)!==0}function wM(t){return(t.flags&16)!==0}function CM(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];xM(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function D0(t){return t===3||t===4||t===6}function xM(t){return t.charCodeAt(0)===64}function oa(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?By(t,e,r,null,n[++i]):By(t,e,r,null,null))}}return t}function By(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function E0(t){return t!==ra}function Bd(t){return t&32767}function DM(t){return t>>16}function jd(t,n){let e=DM(t),i=n;for(;e>0;)i=i[Kr],e--;return i}var lp=!0;function jy(t){let n=lp;return lp=t,n}var EM=256,S0=EM-1,I0=5,SM=0,ni={};function IM(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Yr)&&(i=e[Yr]),i==null&&(i=e[Yr]=SM++);let r=i&S0,o=1<<r;n.data[t+(r>>I0)]|=o}function Ud(t,n){let e=M0(t,n);if(e!==-1)return e;let i=n[J];i.firstCreatePass&&(t.injectorIndex=n.length,Xh(i.data,t),Xh(n,null),Xh(i.blueprint,null));let r=$p(t,n),o=t.injectorIndex;if(E0(r)){let a=Bd(r),s=jd(r,n),l=s[J].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function Xh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function M0(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function $p(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=N0(r),i===null)return ra;if(e++,r=r[Kr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return ra}function cp(t,n,e){IM(t,n,e)}function MM(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(D0(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function T0(t,n,e){if(e&8||t!==void 0)return t;fd(n,"NodeInjector")}function k0(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Ri],o=en(void 0);try{return r?r.get(n,i,e&8):_h(n,i,e&8)}finally{en(o)}}return T0(i,n,e)}function R0(t,n,e,i=0,r){if(t!==null){if(n[ae]&2048&&!(i&2)){let a=AM(t,n,e,i,ni);if(a!==ni)return a}let o=A0(t,n,e,i,ni);if(o!==ni)return o}return k0(n,e,i,r)}function A0(t,n,e,i,r){let o=kM(e);if(typeof o=="function"){if(!zh(n,t,i))return i&1?T0(r,e,i):k0(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))fd(e);else return a}finally{$h()}}else if(typeof o=="number"){let a=null,s=M0(t,n),l=ra,c=i&1?n[Bt][Vt]:null;for((s===-1||i&4)&&(l=s===-1?$p(t,n):n[s+8],l===ra||!Hy(i,!1)?s=-1:(a=n[J],s=Bd(l),n=jd(l,n)));s!==-1;){let u=n[J];if(Uy(o,s,u.data)){let h=TM(s,n,e,a,i,c);if(h!==ni)return h}l=n[s+8],l!==ra&&Hy(i,n[J].data[s+8]===c)&&Uy(o,s,n)?(a=u,s=Bd(l),n=jd(l,n)):s=-1}}return r}function TM(t,n,e,i,r,o){let a=n[J],s=a.data[t+8],l=i==null?Jn(s)&&lp:i!=a&&(s.type&3)!==0,c=r&1&&o===s,u=Pd(s,a,e,l,c);return u!==null?Gs(n,a,u,s,r):ni}function Pd(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,u=o>>20,h=i?s:s+u,g=r?s+u:c;for(let _=h;_<g;_++){let b=a[_];if(_<l&&e===b||_>=l&&b.type===e)return _}if(r){let _=a[l];if(_&&ei(_)&&_.type===e)return l}return null}function Gs(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof ro){let s=o;if(s.resolving)throw gh("");let l=jy(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],u,h=s.injectImpl?en(s.injectImpl):null,g=zh(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&vM(e,a[e],n)}finally{h!==null&&en(h),jy(l),s.resolving=!1,$h()}}return o}function kM(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Yr)?t[Yr]:void 0;return typeof n=="number"?n>=0?n&S0:RM:n}function Uy(t,n,e){let i=1<<t;return!!(e[n+(t>>I0)]&i)}function Hy(t,n){return!(t&2)&&!(t&1&&n)}var io=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return R0(this._tNode,this._lView,n,Wr(i),e)}};function RM(){return new io(ft(),re())}function be(t){return Xs(()=>{let n=t.prototype.constructor,e=n[Ts]||dp(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Ts]||dp(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function dp(t){return sh(t)?()=>{let n=dp(St(t));return n&&n()}:Gr(t)}function AM(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[ae]&2048&&!Ko(a);){let s=A0(o,a,e,i|2,ni);if(s!==ni)return s;let l=o.parent;if(!l){let c=a[Eh];if(c){let u=c.get(e,ni,i&-5);if(u!==ni)return u}l=N0(a),a=a[Kr]}o=l}return r}function N0(t){let n=t[J],e=n.type;return e===2?n.declTNode:e===1?t[Vt]:null}function Js(t){return MM(ft(),t)}function NM(){return da(ft(),re())}function da(t,n){return new O(hn(t,n))}var O=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=NM}return t})();function O0(t){return t instanceof O?t.nativeElement:t}function OM(){return this._results[Symbol.iterator]()}var Nn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new M}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Zb(n);(this._changesDetected=!Yb(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=OM};function F0(t){return(t.flags&128)===128}var Wp=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Wp||{}),P0=new Map,FM=0;function PM(){return FM++}function LM(t){P0.set(t[Ai],t)}function up(t){P0.delete(t[Ai])}var zy="__ngContext__";function aa(t,n){Ni(n)?(t[zy]=n[Ai],LM(n)):t[zy]=n}function L0(t){return B0(t[Yo])}function V0(t){return B0(t[mn])}function B0(t){for(;t!==null&&!kn(t);)t=t[mn];return t}var VM;function Gp(t){VM=t}var ua=new y("",{factory:()=>BM}),BM="ng";var eu=new y(""),jt=new y("",{providedIn:"platform",factory:()=>"unknown"}),el=new y(""),lo=new y("",{factory:()=>d(ee).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var j0="r";var U0="di";var H0=!1,z0=new y("",{factory:()=>H0});var $y=new WeakMap;function jM(t,n){if(t==null||typeof t!="object")return;let e=$y.get(t);e||(e=new WeakSet,$y.set(t,e)),e.add(n)}var UM=(t,n,e,i)=>{};function HM(t,n,e,i){UM(t,n,e,i)}function tu(t){return(t.flags&32)===32}var zM=()=>null;function $0(t,n,e=!1){return zM(t,n,e)}function W0(t,n){let e=t.contentQueries;if(e!==null){let i=K(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];js(o),s.contentQueries(2,n[a],a)}}}finally{K(i)}}}function mp(t,n,e){js(0);let i=K(null);try{n(t,e)}finally{K(i)}}function qp(t,n,e){if(Ih(n)){let i=K(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{K(i)}}}var On=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(On||{});var kd;function $M(){if(kd===void 0&&(kd=null,lr.trustedTypes))try{kd=lr.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return kd}function nu(t){return $M()?.createHTML(t)||t}var Rd;function WM(){if(Rd===void 0&&(Rd=null,lr.trustedTypes))try{Rd=lr.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Rd}function Wy(t){return WM()?.createScriptURL(t)||t}var Li=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${cd})`}},fp=class extends Li{getTypeName(){return"HTML"}},hp=class extends Li{getTypeName(){return"Style"}},pp=class extends Li{getTypeName(){return"Script"}},gp=class extends Li{getTypeName(){return"URL"}},_p=class extends Li{getTypeName(){return"ResourceURL"}};function Fn(t){return t instanceof Li?t.changingThisBreaksApplicationSecurity:t}function Vi(t,n){let e=G0(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${cd})`)}return e===n}function G0(t){return t instanceof Li&&t.getTypeName()||null}function Qp(t){return new fp(t)}function Yp(t){return new hp(t)}function Zp(t){return new pp(t)}function Kp(t){return new gp(t)}function Xp(t){return new _p(t)}function GM(t){let n=new bp(t);return qM()?new vp(n):n}var vp=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(nu(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},bp=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=nu(n),e}};function qM(){try{return!!new window.DOMParser().parseFromString(nu(""),"text/html")}catch{return!1}}var QM=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function tl(t){return t=String(t),t.match(QM)?t:"unsafe:"+t}function Bi(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function nl(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var q0=Bi("area,br,col,hr,img,wbr"),Q0=Bi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Y0=Bi("rp,rt"),YM=nl(Y0,Q0),ZM=nl(Q0,Bi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),KM=nl(Y0,Bi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Gy=nl(q0,ZM,KM,YM),Z0=Bi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),XM=Bi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),JM=Bi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),eT=nl(Z0,XM,JM),tT=Bi("script,style,template");var yp=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=rT(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=iT(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=qy(n).toLowerCase();if(!Gy.hasOwnProperty(e))return this.sanitizedSomething=!0,!tT.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!eT.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;Z0[s]&&(l=tl(l)),this.buf.push(" ",a,'="',Qy(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=qy(n).toLowerCase();Gy.hasOwnProperty(e)&&!q0.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Qy(n))}};function nT(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function iT(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw K0(n);return n}function rT(t){let n=t.firstChild;if(n&&nT(t,n))throw K0(n);return n}function qy(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function K0(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var oT=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,aT=/([^\#-~ |!])/g;function Qy(t){return t.replace(/&/g,"&amp;").replace(oT,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(aT,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Ad;function Jp(t,n){let e=null;try{Ad=Ad||GM(t);let i=n?String(n):"";e=Ad.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Ad.getInertBodyElement(i)}while(i!==o);let s=new yp().sanitizeChildren(Yy(e)||e);return nu(s)}finally{if(e){let i=Yy(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function Yy(t){return"content"in t&&sT(t)?t.content:null}function sT(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var lT=/^>|^->|<!--|-->|--!>|<!-$/g,cT=/(<|>)/g,dT="\u200B$1\u200B";function uT(t){return t.replace(lT,n=>n.replace(cT,dT))}function mT(t,n){return t.createText(n)}function fT(t,n,e){t.setValue(n,e)}function hT(t,n){return t.createComment(uT(n))}function X0(t,n,e){return t.createElement(n,e)}function Hd(t,n,e,i,r){t.insertBefore(n,e,i,r)}function J0(t,n,e){t.appendChild(n,e)}function Zy(t,n,e,i,r){i!==null?Hd(t,n,e,i,r):J0(t,n,e)}function ew(t,n,e,i){t.removeChild(null,n,e,i)}function pT(t,n,e){t.setAttribute(n,"style",e)}function gT(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function tw(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&CM(t,n,i),r!==null&&gT(t,n,r),o!==null&&pT(t,n,o)}var ht=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(ht||{});function nw(t){let n=rw();return n?n.sanitize(ht.URL,t)||"":Vi(t,"URL")?Fn(t):tl(Wo(t))}function iw(t){let n=rw();if(n)return Wy(n.sanitize(ht.RESOURCE_URL,t)||"");if(Vi(t,"ResourceURL"))return Wy(Fn(t));throw new k(904,!1)}var _T={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function vT(t,n){return _T[t]?.[n]===!0?iw:nw}function eg(t,n,e){return vT(n,e)(t)}function rw(){let t=re();return t&&t[Tn].sanitizer}function ow(t){return t instanceof Function?t():t}function bT(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var aw="ng-template";function yT(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&bT(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(tg(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function tg(t){return t.type===4&&t.value!==aw}function wT(t,n,e){let i=t.type===4&&!e?aw:t.value;return n===i}function CT(t,n,e){let i=4,r=t.attrs,o=r!==null?ET(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!Rn(i)&&!Rn(l))return!1;if(a&&Rn(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!wT(t,l,e)||l===""&&n.length===1){if(Rn(i))return!1;a=!0}}else if(i&8){if(r===null||!yT(t,r,l,e)){if(Rn(i))return!1;a=!0}}else{let c=n[++s],u=xT(l,r,tg(t),e);if(u===-1){if(Rn(i))return!1;a=!0;continue}if(c!==""){let h;if(u>o?h="":h=r[u+1].toLowerCase(),i&2&&c!==h){if(Rn(i))return!1;a=!0}}}}return Rn(i)||a}function Rn(t){return(t&1)===0}function xT(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return ST(n,t)}function sw(t,n,e=!1){for(let i=0;i<n.length;i++)if(CT(t,n[i],e))return!0;return!1}function DT(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function ET(t){for(let n=0;n<t.length;n++){let e=t[n];if(D0(e))return n}return t.length}function ST(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function IT(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Ky(t,n){return t?":not("+n.trim()+")":n}function MT(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Rn(a)&&(n+=Ky(o,r),r=""),i=a,o=o||!Rn(i);e++}return r!==""&&(n+=Ky(o,r)),n}function TT(t){return t.map(MT).join(",")}function kT(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Rn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var qt={};function ng(t,n,e,i,r,o,a,s,l,c,u){let h=Je+i,g=h+r,_=RT(h,g),b=typeof c=="function"?c():c;return _[J]={type:t,blueprint:_,template:e,queries:null,viewQuery:s,declTNode:n,data:_.slice().fill(null,h),bindingStartIndex:h,expandoStartIndex:g,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:b,incompleteFirstPass:!1,ssrId:u}}function RT(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:qt);return e}function AT(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=ng(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function ig(t,n,e,i,r,o,a,s,l,c,u){let h=n.blueprint.slice();return h[Mn]=r,h[ae]=i|4|128|8|64|1024,(c!==null||t&&t[ae]&2048)&&(h[ae]|=2048),kh(h),h[mt]=h[Kr]=t,h[rt]=e,h[Tn]=a||t&&t[Tn],h[je]=s||t&&t[je],h[Ri]=l||t&&t[Ri]||null,h[Vt]=o,h[Ai]=PM(),h[Zr]=u,h[Eh]=c,h[Bt]=n.type==2?t[Bt]:h,h}function NT(t,n,e){let i=hn(n,t),r=AT(e),o=t[Tn].rendererFactory,a=rg(t,ig(t,r,null,lw(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function lw(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function cw(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function rg(t,n){return t[Yo]?t[Dh][mn]=n:t[Yo]=n,t[Dh]=n,n}function v(t=1){dw(We(),re(),ti()+t,!1)}function dw(t,n,e,i){if(!i)if((n[ae]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Od(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Fd(n,o,0,e)}hr(e)}var iu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(iu||{});function wp(t,n,e,i){let r=K(null);try{let[o,a,s]=t.inputs[e],l=null;(a&iu.SignalBased)!==0&&(l=n[o][nt]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):v0(n,l,o,i)}finally{K(r)}}var ii=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(ii||{}),OT;function og(t,n){return OT(t,n)}var G4=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Cp=new WeakMap,zs=new WeakSet;function FT(t,n){let e=Cp.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),zs.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function PT(t,n){let e=Cp.get(t);e?e.includes(n)||e.push(n):Cp.set(t,[n])}var oo=new Set,ru=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(ru||{}),Pn=new y(""),Xy=new Set;function gr(t){Xy.has(t)||(Xy.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var ou=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=x({token:t,providedIn:"root",factory:()=>new t})}return t})(),ag=[0,1,2,3],sg=(()=>{class t{ngZone=d(U);scheduler=d(Kn);errorHandler=d(Lt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(Pn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Le(De.AfterRenderHooksStart),this.executing=!0;for(let i of ag)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Le(De.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Jr]??=[]).push(e),no(i),i[ae]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(ru.AFTER_NEXT_RENDER,e):e()}static \u0275prov=x({token:t,providedIn:"root",factory:()=>new t})}return t})(),qs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Jr];n&&(this.view[Jr]=n.filter(e=>e!==this))}};function pt(t,n){let e=n?.injector??d(ce);return gr("NgAfterNextRender"),VT(t,e,n,!0)}function LT(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function VT(t,n,e,i){let r=n.get(ou);r.impl??=n.get(sg);let o=n.get(Pn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Ot):null,s=n.get(ta,null,{optional:!0}),l=new qs(r.impl,LT(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var uw=new y("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:d(Be)})});function mw(t,n,e){let i=t.get(uw);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function BT(t,n){let e=t.get(uw);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function jT(t,n){for(let[e,i]of n)mw(t,i.animateFns)}function Jy(t,n,e,i){let r=t?.[mr]?.enter;n!==null&&r&&r.has(e.index)&&jT(i,r)}function ia(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;kn(r)?l=r:Ni(r)&&(c=!0,r=r[Mn]);let u=fn(r);t===0&&i!==null?(Jy(s,i,o,e),a==null?J0(n,i,u):Hd(n,i,u,a||null,!0)):t===1&&i!==null?(Jy(s,i,o,e),Hd(n,i,u,a||null,!0),FT(o,u)):t===2?(s?.[mr]?.leave?.has(o.index)&&PT(o,u),zs.delete(u),e0(s,o,e,h=>{if(zs.has(u)){zs.delete(u);return}ew(n,u,c,h)})):t===3&&(zs.delete(u),e0(s,o,e,()=>{n.destroyNode(u)})),l!=null&&KT(n,t,e,l,o,i,a)}}function UT(t,n){fw(t,n),n[Mn]=null,n[Vt]=null}function HT(t,n,e,i,r,o){i[Mn]=r,i[Vt]=n,su(t,i,e,1,r,o)}function fw(t,n){n[Tn].changeDetectionScheduler?.notify(9),su(t,n,n[je],2,null,null)}function zT(t){let n=t[Yo];if(!n)return Jh(t[J],t);for(;n;){let e=null;if(Ni(n))e=n[Yo];else{let i=n[et];i&&(e=i)}if(!e){for(;n&&!n[mn]&&n!==t;)Ni(n)&&Jh(n[J],n),n=n[mt];n===null&&(n=t),Ni(n)&&Jh(n[J],n),e=n&&n[mn]}n=e}}function lg(t,n){let e=t[eo],i=e.indexOf(n);e.splice(i,1)}function au(t,n){if(to(n))return;let e=n[je];e.destroyNode&&su(t,n,e,3,null,null),zT(n)}function Jh(t,n){if(to(n))return;let e=K(null);try{n[ae]&=-129,n[ae]|=256,n[tn]&&tr(n[tn]),GT(t,n),WT(t,n),n[J].type===1&&n[je].destroy();let i=n[ur];if(i!==null&&kn(n[mt])){i!==n[mt]&&lg(i,n);let r=n[Xn];r!==null&&r.detachView(t)}up(n)}finally{K(e)}}function e0(t,n,e,i){let r=t?.[mr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&oo.add(t[Ai]),mw(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:u}=c();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),$T(t,i)}else t&&oo.delete(t[Ai]),i(!1)},r)}function $T(t,n){let e=t[mr]?.running;if(e){e.then(()=>{t[mr].running=void 0,oo.delete(t[Ai]),n(!0)});return}n(!1)}function WT(t,n){let e=t.cleanup,i=n[Qo];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[Qo]=null);let r=n[Ii];if(r!==null){n[Ii]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[ar];if(o!==null){n[ar]=null;for(let a of o)a.destroy()}}function GT(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof ro)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Le(De.LifecycleHookStart,s,l);try{l.call(s)}finally{Le(De.LifecycleHookEnd,s,l)}}else{Le(De.LifecycleHookStart,r,o);try{o.call(r)}finally{Le(De.LifecycleHookEnd,r,o)}}}}}function hw(t,n,e){return qT(t,n.parent,e)}function qT(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Mn];if(Jn(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===On.None||r===On.Emulated)return null}return hn(i,e)}function pw(t,n,e){return YT(t,n,e)}function QT(t,n,e){return t.type&40?hn(t,e):null}var YT=QT,t0;function cg(t,n,e,i){let r=hw(t,i,n),o=n[je],a=i.parent||n[Vt],s=pw(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)Zy(o,r,e[l],s,!1);else Zy(o,r,e,s,!1);t0!==void 0&&t0(o,i,n,e,r)}function $s(t,n){if(n!==null){let e=n.type;if(e&3)return hn(n,t);if(e&4)return xp(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return $s(t,i);{let r=t[n.index];return kn(r)?xp(-1,r):fn(r)}}else{if(e&128)return $s(t,n.next);if(e&32)return og(n,t)()||fn(t[n.index]);{let i=gw(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=sr(t[Bt]);return $s(r,i)}else return $s(t,n.next)}}}return null}function gw(t,n){if(n!==null){let i=t[Bt][Vt],r=n.projection;return i.projection[r]}return null}function xp(t,n){let e=et+t+1;if(e<n.length){let i=n[e],r=i[J].firstChild;if(r!==null)return $s(i,r)}return n[fr]}function dg(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Ri];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&aa(fn(l),i),e.flags|=2),!tu(e))if(c&8)dg(t,n,e.child,i,r,o,!1),ia(n,t,s,r,l,e,o,i);else if(c&32){let u=og(e,i),h;for(;h=u();)ia(n,t,s,r,h,e,o,i);ia(n,t,s,r,l,e,o,i)}else c&16?_w(t,n,i,e,r,o):ia(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function su(t,n,e,i,r,o){dg(e,i,t.firstChild,n,r,o,!1)}function ZT(t,n,e){let i=n[je],r=hw(t,e,n),o=e.parent||n[Vt],a=pw(o,e,n);_w(i,0,n,e,r,a)}function _w(t,n,e,i,r,o){let a=e[Bt],l=a[Vt].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];ia(n,t,e[Ri],r,u,i,o,e)}else{let c=l,u=a[mt];F0(i)&&(c.flags|=128),dg(t,n,c,u,r,o,!0)}}function KT(t,n,e,i,r,o,a){let s=i[fr],l=fn(i);s!==l&&ia(n,t,e,o,s,r,a);for(let c=et;c<i.length;c++){let u=i[c];su(u[J],u,t,n,o,s)}}function XT(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:ii.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=ii.Important),t.setStyle(e,i,r,o))}}function vw(t,n,e,i,r){let o=ti(),a=i&2;try{hr(-1),a&&n.length>Je&&dw(t,n,Je,!1);let s=a?De.TemplateUpdateStart:De.TemplateCreateStart;Le(s,r,e),e(i,r)}finally{hr(o);let s=a?De.TemplateUpdateEnd:De.TemplateCreateEnd;Le(s,r,e)}}function lu(t,n,e){ik(t,n,e),(e.flags&64)===64&&rk(t,n,e)}function il(t,n,e=hn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function JT(t,n,e,i){let o=i.get(z0,H0)||e===On.ShadowDom||e===On.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return ek(a),a}function ek(t){tk(t)}var tk=()=>null;function nk(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function bw(t,n,e,i,r,o){let a=n[J];if(cu(t,a,n,e,i)){Jn(t)&&ww(n,t.index);return}t.type&3&&(e=nk(e)),yw(t,n,e,i,r,o)}function yw(t,n,e,i,r,o){if(t.type&3){let a=hn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function ww(t,n){let e=pn(n,t);e[ae]&16||(e[ae]|=64)}function ik(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Jn(e)&&NT(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Ud(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=Gs(n,t,a,e);if(aa(l,n),o!==null&&sk(n,a-i,l,s,e,o),ei(s)){let c=pn(e.index,n);c[rt]=Gs(n,t,a,e)}}}function rk(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=Cy();try{hr(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];xd(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&ok(l,c)}}finally{hr(-1),xd(a)}}function ok(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function ug(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];sw(n,o.selectors,!1)&&(i??=[],ei(o)?i.unshift(o):i.push(o))}return i}function ak(t,n,e,i,r,o){let a=hn(t,n);Cw(n[je],a,o,t.value,e,i,r)}function Cw(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?Wo(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function sk(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];wp(i,e,l,c)}}function mg(t,n,e,i,r){let o=Je+e,a=n[J],s=r(a,n,t,i,e);n[o]=s,Xo(t,!0);let l=t.type===2;return l?(tw(n[je],s,t),(fy()===0||Zo(t))&&aa(s,n),hy()):aa(s,n),Id()&&(!l||!tu(t))&&cg(a,n,s,t),t}function fg(t){let n=t;return jh()?Uh():(n=n.parent,Xo(n,!1)),n}function lk(t,n){let e=t[Ri];if(!e)return;let i;try{i=e.get(rn,null)}catch{i=null}i?.(n)}function cu(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],u=a[l+1],h=n.data[c];wp(h,e[c],u,r),s=!0}if(o)for(let l of o){let c=e[l],u=n.data[l];wp(u,c,i,r),s=!0}return s}function ck(t,n){let e=pn(n,t),i=e[J];dk(i,e);let r=e[Mn];r!==null&&e[Zr]===null&&(e[Zr]=$0(r,e[Ri])),Le(De.ComponentStart);try{hg(i,e,e[rt])}finally{Le(De.ComponentEnd,e[rt])}}function dk(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function hg(t,n,e){Ed(n);try{let i=t.viewQuery;i!==null&&mp(1,i,e);let r=t.template;r!==null&&vw(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Xn]?.finishViewCreation(t),t.staticContentQueries&&W0(t,n),t.staticViewQueries&&mp(2,t.viewQuery,e);let o=t.components;o!==null&&uk(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[ae]&=-5,Sd()}}function uk(t,n){for(let e=0;e<n.length;e++)ck(t,n[e])}function rl(t,n,e,i){let r=K(null);try{let o=n.tView,s=t[ae]&4096?4096:16,l=ig(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[ur]=c;let u=t[Xn];return u!==null&&(l[Xn]=u.createEmbeddedView(o)),hg(o,l,e),l}finally{K(r)}}function sa(t,n){return!n||n.firstChild===null||F0(t)}function Qs(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(fn(o)),kn(o)&&xw(o,i);let a=e.type;if(a&8)Qs(t,n,e.child,i);else if(a&32){let s=og(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=gw(n,e);if(Array.isArray(s))i.push(...s);else{let l=sr(n[Bt]);Qs(l[J],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function xw(t,n){for(let e=et;e<t.length;e++){let i=t[e],r=i[J].firstChild;r!==null&&Qs(i[J],i,r,n)}t[fr]!==t[Mn]&&n.push(t[fr])}function Dw(t){if(t[Jr]!==null){for(let n of t[Jr])n.impl.addSequence(n);t[Jr].length=0}}var Ew=[];function mk(t){return t[tn]??fk(t)}function fk(t){let n=Ew.pop()??Object.create(pk);return n.lView=t,n}function hk(t){t.lView[tn]!==t&&(t.lView=null,Ew.push(t))}var pk=te(C({},Xi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{no(t.lView)},consumerOnSignalRead(){this.lView[tn]=this}});function gk(t){let n=t[tn]??Object.create(_k);return n.lView=t,n}var _k=te(C({},Xi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=sr(t.lView);for(;n&&!Sw(n[J]);)n=sr(n);n&&Rh(n)},consumerOnSignalRead(){this.lView[tn]=this}});function Sw(t){return t.type!==2}function Iw(t){if(t[ar]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[ar])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[ae]&8192)}}var vk=100;function Mw(t,n=0){let i=t[Tn].rendererFactory,r=!1;r||i.begin?.();try{bk(t,n)}finally{r||i.end?.()}}function bk(t,n){let e=Hh();try{Rs(!0),Dp(t,n);let i=0;for(;Bs(t);){if(i===vk)throw new k(103,!1);i++,Dp(t,1)}}finally{Rs(e)}}function yk(t,n,e,i){if(to(n))return;let r=n[ae],o=!1,a=!1;Ed(n);let s=!0,l=null,c=null;o||(Sw(t)?(c=mk(n),l=Di(c)):yc()===null?(s=!1,c=gk(n),l=Di(c)):n[tn]&&(tr(n[tn]),n[tn]=null));try{kh(n),by(t.bindingStartIndex),e!==null&&vw(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let _=t.preOrderCheckHooks;_!==null&&Od(n,_,null)}else{let _=t.preOrderHooks;_!==null&&Fd(n,_,0,null),Kh(n,0)}if(a||wk(n),Iw(n),Tw(n,0),t.contentQueries!==null&&W0(t,n),!o)if(u){let _=t.contentCheckHooks;_!==null&&Od(n,_)}else{let _=t.contentHooks;_!==null&&Fd(n,_,1),Kh(n,1)}xk(t,n);let h=t.components;h!==null&&Rw(n,h,0);let g=t.viewQuery;if(g!==null&&mp(2,g,i),!o)if(u){let _=t.viewCheckHooks;_!==null&&Od(n,_)}else{let _=t.viewHooks;_!==null&&Fd(n,_,2),Kh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[_d]){for(let _ of n[_d])_();n[_d]=null}o||(Dw(n),n[ae]&=-73)}catch(u){throw o||no(n),u}finally{c!==null&&(er(c,l),s&&hk(c)),Sd()}}function Tw(t,n){for(let e=L0(t);e!==null;e=V0(e))for(let i=et;i<e.length;i++){let r=e[i];kw(r,n)}}function wk(t){for(let n=L0(t);n!==null;n=V0(n)){if(!(n[ae]&2))continue;let e=n[eo];for(let i=0;i<e.length;i++){let r=e[i];Rh(r)}}}function Ck(t,n,e){Le(De.ComponentStart);let i=pn(n,t);try{kw(i,e)}finally{Le(De.ComponentEnd,i[rt])}}function kw(t,n){bd(t)&&Dp(t,n)}function Dp(t,n){let i=t[J],r=t[ae],o=t[tn],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&No(o)),a||=!1,o&&(o.dirty=!1),t[ae]&=-9217,a)yk(i,t,i.template,t[rt]);else if(r&8192){let s=K(null);try{Iw(t),Tw(t,1);let l=i.components;l!==null&&Rw(t,l,1),Dw(t)}finally{K(s)}}}function Rw(t,n,e){for(let i=0;i<n.length;i++)Ck(t,n[i],e)}function xk(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)hr(~r);else{let o=r,a=e[++i],s=e[++i];wy(a,o);let l=n[o];Le(De.HostBindingsUpdateStart,l);try{s(2,l)}finally{Le(De.HostBindingsUpdateEnd,l)}}}}finally{hr(-1)}}function pg(t,n){let e=Hh()?64:1088;for(t[Tn].changeDetectionScheduler?.notify(n);t;){t[ae]|=e;let i=sr(t);if(Ko(t)&&!i)return t;t=i}return null}function Aw(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function Nw(t,n){let e=et+n;if(e<t.length)return t[e]}function ol(t,n,e,i=!0){let r=n[J];if(Dk(r,n,t,e),i){let a=xp(e,t),s=n[je],l=s.parentNode(t[fr]);l!==null&&HT(r,t[Vt],s,n,l,a)}let o=n[Zr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Ow(t,n){let e=Ys(t,n);return e!==void 0&&au(e[J],e),e}function Ys(t,n){if(t.length<=et)return;let e=et+n,i=t[e];if(i){let r=i[ur];r!==null&&r!==t&&lg(r,i),n>0&&(t[e-1][mn]=i[mn]);let o=Ps(t,et+n);UT(i[J],i);let a=o[Xn];a!==null&&a.detachView(o[J]),i[mt]=null,i[mn]=null,i[ae]&=-129}return i}function Dk(t,n,e,i){let r=et+i,o=e.length;i>0&&(e[r-1][mn]=n),i<o-et?(n[mn]=e[r],vh(e,et+i,n)):(e.push(n),n[mn]=null),n[mt]=e;let a=n[ur];a!==null&&e!==a&&Fw(a,n);let s=n[Xn];s!==null&&s.insertView(t),yd(n),n[ae]|=128}function Fw(t,n){let e=t[eo],i=n[mt];if(Ni(i))t[ae]|=2;else{let r=i[mt][Bt];n[Bt]!==r&&(t[ae]|=2)}e===null?t[eo]=[n]:e.push(n)}var pr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[J];return Qs(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[rt]}set context(n){this._lView[rt]=n}get destroyed(){return to(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[mt];if(kn(n)){let e=n[Vs],i=e?e.indexOf(this):-1;i>-1&&(Ys(n,i),Ps(e,i))}this._attachedToViewContainer=!1}au(this._lView[J],this._lView)}onDestroy(n){Ah(this._lView,n)}markForCheck(){pg(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ae]&=-129}reattach(){yd(this._lView),this._lView[ae]|=128}detectChanges(){this._lView[ae]|=1024,Mw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new k(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Ko(this._lView),e=this._lView[ur];e!==null&&!n&&lg(e,this._lView),fw(this._lView[J],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new k(902,!1);this._appRef=n;let e=Ko(this._lView),i=this._lView[ur];i!==null&&!e&&Fw(i,this._lView),yd(this._lView)}};var Ge=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=Ek;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=rl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new pr(o)}}return t})();function Ek(){return du(ft(),re())}function du(t,n){return t.type&4?new Ge(n,t,da(t,n)):null}function ma(t,n,e,i,r){let o=t.data[n];if(o===null)o=Sk(t,n,e,i,r),yy()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=py();o.injectorIndex=a===null?-1:a.injectorIndex}return Xo(o,!0),o}function Sk(t,n,e,i,r){let o=Bh(),a=jh(),s=a?o:o&&o.parent,l=t.data[n]=Mk(t,s,e,n,i,r);return Ik(t,l,o,a),l}function Ik(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function Mk(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Ph()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Tk(t){let n=t[Sh]??[],i=t[mt][je],r=[];for(let o of n)o.data[U0]!==void 0?r.push(o):kk(o,i);t[Sh]=r}function kk(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[j0];for(;e<r;){let o=i.nextSibling;ew(n,i,!1),i=o,e++}}}var Rk=()=>null,Ak=()=>null;function zd(t,n){return Rk(t,n)}function Pw(t,n,e){return Ak(t,n,e)}var Lw=class{},uu=class{},Ep=class{resolveComponentFactory(n){throw new k(917,!1)}},al=class{static NULL=new Ep},st=class{},ze=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>Nk()}return t})();function Nk(){let t=re(),n=ft(),e=pn(n.index,t);return(Ni(e)?e:t)[je]}var Vw=(()=>{class t{static \u0275prov=x({token:t,providedIn:"root",factory:()=>null})}return t})();var Ld={},Sp=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Ld,i);return r!==Ld||e===Ld?r:this.parentInjector.get(n,e,i)}};function $d(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=dd(r,s);else if(o==2){let l=s,c=n[++a];i=dd(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function ye(t,n=0){let e=re();if(e===null)return H(t,n);let i=ft();return R0(i,e,St(t),n)}function Bw(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,l,c]=u.resolveHostDirectives(a);break}Pk(t,n,e,s,o,l,c)}o!==null&&i!==null&&Ok(e,i,o)}function Ok(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new k(-301,!1);i.push(n[r],o)}}function Fk(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function Pk(t,n,e,i,r,o,a){let s=i.length,l=null;for(let g=0;g<s;g++){let _=i[g];l===null&&ei(_)&&(l=_,Fk(t,e,g)),cp(Ud(e,n),t,_.type)}Hk(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let g=0;g<s;g++){let _=i[g];_.providersResolver&&_.providersResolver(_)}let c=!1,u=!1,h=cw(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let g=0;g<s;g++){let _=i[g];if(e.mergedAttrs=oa(e.mergedAttrs,_.hostAttrs),Vk(t,e,n,h,_),Uk(h,_,r),a!==null&&a.has(_)){let[S,I]=a.get(_);e.directiveToIndex.set(_.type,[h,S+e.directiveStart,I+e.directiveStart])}else(o===null||!o.has(_))&&e.directiveToIndex.set(_.type,h);_.contentQueries!==null&&(e.flags|=4),(_.hostBindings!==null||_.hostAttrs!==null||_.hostVars!==0)&&(e.flags|=64);let b=_.type.prototype;!c&&(b.ngOnChanges||b.ngOnInit||b.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!u&&(b.ngOnChanges||b.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),h++}Lk(t,e,o)}function Lk(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))n0(0,n,r,i),n0(1,n,r,i),r0(n,i,!1);else{let o=e.get(r);i0(0,n,o,i),i0(1,n,o,i),r0(n,i,!0)}}}function n0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),jw(n,o)}}function i0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),jw(n,a)}}function jw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function r0(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||tg(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let u of c)if(u===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let u=0;u<c.length;u+=2)if(c[u]===n){a??=[],a.push(c[u+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function Vk(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Gr(r.type,!0)),a=new ro(o,ei(r),ye,null);t.blueprint[i]=a,e[i]=a,Bk(t,n,i,cw(t,e,r.hostVars,qt),r)}function Bk(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;jk(a)!=s&&a.push(s),a.push(e,i,o)}}function jk(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function Uk(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;ei(n)&&(e[""]=t)}}function Hk(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function gg(t,n,e,i,r,o,a,s){let l=n[J],c=l.consts,u=nn(c,a),h=ma(l,t,e,i,u);return o&&Bw(l,n,h,nn(c,s),r),h.mergedAttrs=oa(h.mergedAttrs,h.attrs),h.attrs!==null&&$d(h,h.attrs,!1),h.mergedAttrs!==null&&$d(h,h.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,h),h}function _g(t,n){C0(t,n),Ih(n)&&t.queries.elementEnd(n)}function zk(t,n,e,i,r,o){let a=n.consts,s=nn(a,r),l=ma(n,t,e,i,s);if(l.mergedAttrs=oa(l.mergedAttrs,l.attrs),o!=null){let c=nn(a,o);l.localNames=[];for(let u=0;u<c.length;u+=2)l.localNames.push(c[u],-1)}return l.attrs!==null&&$d(l,l.attrs,!1),l.mergedAttrs!==null&&$d(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function vg(t){return Hw(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function Uw(t,n){if(Array.isArray(t))for(let e=0;e<t.length;e++)n(t[e]);else{let e=t[Symbol.iterator](),i;for(;!(i=e.next()).done;)n(i.value)}}function Hw(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function $k(t,n,e){return t[n]=e}function Wk(t,n){return t[n]}function gn(t,n,e){if(e===qt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function Gk(t,n,e,i){let r=gn(t,n,e);return gn(t,n+1,i)||r}function ep(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&jM(r,o);let a=Jn(t)?pn(t.index,n):n;pg(a,5);let s=n[rt],l=o0(n,s,e,r),c=i.__ngNextListenerFn__;for(;c;)l=o0(n,s,c,r)&&l,c=c.__ngNextListenerFn__;return l}}function o0(t,n,e,i){let r=K(null);try{return Le(De.OutputStart,n,e),e(i)!==!1}catch(o){return lk(t,o),!1}finally{Le(De.OutputEnd,n,e),K(r)}}function qk(t,n,e,i,r,o,a,s){let l=Zo(t),c=!1,u=null;if(!i&&l&&(u=Yk(n,e,o,t.index)),u!==null){let h=u.__ngLastListenerFn__||u;h.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,c=!0}else{let h=hn(t,e),g=i?i(h):h;HM(e,g,o,s),i||(s.__ngNativeEl__=h);let _=r.listen(g,o,s);if(!Qk(o)){let b=i?S=>i(fn(S[t.index])):t.index;zw(b,n,e,o,s,_,!1)}}return c}function Qk(t){return t.startsWith("animation")||t.startsWith("transition")}function Yk(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[Qo],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function zw(t,n,e,i,r,o,a){let s=n.firstCreatePass?Oh(n):null,l=Nh(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function a0(t,n,e,i,r,o){let a=n[e],s=n[J],c=s.data[e].outputs[i],h=a[c].subscribe(o);zw(t.index,s,n,r,o,h,!0)}var Ip=Symbol("BINDING");function $w(t){return t.debugInfo?.className||t.type.name||null}var Wd=class extends al{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Ti(n);return new ao(e,this.ngModule)}};function Zk(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&iu.SignalBased)!==0};return r&&(o.transform=r),o})}function Kk(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function Xk(t,n,e){let i=n instanceof Be?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Sp(e,i):e}function Jk(t){let n=t.get(st,null);if(n===null)throw new k(407,!1);let e=t.get(Vw,null),i=t.get(Kn,null),r=t.get(Pn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function eR(t,n){let e=Ww(t);return X0(n,e,e==="svg"?Mh:e==="math"?ay:null)}function Ww(t){return(t.selectors[0][0]||"div").toLowerCase()}var ao=class extends uu{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=Zk(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=Kk(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=TT(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Le(De.DynamicComponentStart);let s=K(null);try{let l=this.componentDef,c=Xk(l,r||this.ngModule,n),u=Jk(c),h=u.tracingService;return h&&h.componentCreate?h.componentCreate($w(l),()=>this.createComponentRef(u,c,e,i,o,a)):this.createComponentRef(u,c,e,i,o,a)}finally{K(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=tR(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),u=r?JT(c,r,s.encapsulation,e):eR(s,c),h=a?.some(s0)||o?.some(b=>typeof b!="function"&&b.bindings.some(s0)),g=ig(null,l,null,512|lw(s),null,null,n,c,e,null,$0(u,e,!0));g[Je]=u,Ed(g);let _=null;try{let b=gg(Je,g,2,"#host",()=>l.directiveRegistry,!0,0);tw(c,u,b),aa(u,g),lu(l,g,b),qp(l,b,g),_g(l,b),i!==void 0&&iR(b,this.ngContentSelectors,i),_=pn(b.index,g),g[rt]=_[rt],hg(l,g,null)}catch(b){throw _!==null&&up(_),up(g),b}finally{Le(De.DynamicComponentEnd),Sd()}return new Gd(this.componentType,g,!!h)}};function tR(t,n,e,i){let r=t?["ng-version","21.2.11"]:kT(n.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[Ip].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let h=i[u];if(typeof h!="function")for(let g of h.bindings){s+=g[Ip].requiredVars;let _=u+1;g.create&&(g.targetIdx=_,(o??=[]).push(g)),g.update&&(g.targetIdx=_,(a??=[]).push(g))}}let l=[n];if(i)for(let u of i){let h=typeof u=="function"?u:u.type,g=ph(h);l.push(g)}return ng(0,null,nR(o,a),1,s,l,null,null,null,[r],null)}function nR(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function s0(t){let n=t[Ip].kind;return n==="input"||n==="twoWay"}var Gd=class extends Lw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=vd(e[J],Je),this.location=da(this._tNode,e),this.instance=pn(this._tNode.index,e)[rt],this.hostView=this.changeDetectorRef=new pr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=cu(i,r[J],r,n,e);this.previousInputValues.set(n,e);let a=pn(i.index,r);pg(a,1)}get injector(){return new io(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function iR(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var tt=(()=>{class t{static __NG_ELEMENT_ID__=rR}return t})();function rR(){let t=ft();return Gw(t,re())}var Mp=class t extends tt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return da(this._hostTNode,this._hostLView)}get injector(){return new io(this._hostTNode,this._hostLView)}get parentInjector(){let n=$p(this._hostTNode,this._hostLView);if(E0(n)){let e=jd(n,this._hostLView),i=Bd(n),r=e[J].data[i+8];return new io(r,e)}else return new io(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=l0(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-et}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=zd(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,sa(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!hM(n),c;if(l)c=e;else{let I=e||{};c=I.index,i=I.injector,r=I.projectableNodes,o=I.environmentInjector||I.ngModuleRef,a=I.directives,s=I.bindings}let u=l?n:new ao(Ti(n)),h=i||this.parentInjector;if(!o&&u.ngModule==null){let T=(l?h:this.parentInjector).get(Be,null);T&&(o=T)}let g=Ti(u.componentType??{}),_=zd(this._lContainer,g?.id??null),b=_?.firstChild??null,S=u.create(h,r,b,o,a,s);return this.insertImpl(S.hostView,c,sa(this._hostTNode,_)),S}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(cy(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[mt],c=new t(l,l[Vt],l[mt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return ol(a,r,o,i),n.attachToViewContainerRef(),vh(tp(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=l0(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Ys(this._lContainer,e);i&&(Ps(tp(this._lContainer),e),au(i[J],i))}detach(n){let e=this._adjustIndex(n,-1),i=Ys(this._lContainer,e);return i&&Ps(tp(this._lContainer),e)!=null?new pr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function l0(t){return t[Vs]}function tp(t){return t[Vs]||(t[Vs]=[])}function Gw(t,n){let e,i=n[t.index];return kn(i)?e=i:(e=Aw(i,n,null,t),n[t.index]=e,rg(n,e)),aR(e,n,t,i),new Mp(e,t,n)}function oR(t,n){let e=t[je],i=e.createComment(""),r=hn(n,t),o=e.parentNode(r);return Hd(e,o,i,e.nextSibling(r),!1),i}var aR=cR,sR=()=>!1;function lR(t,n,e){return sR(t,n,e)}function cR(t,n,e,i){if(t[fr])return;let r;e.type&8?r=fn(i):r=oR(n,e),t[fr]=r}var Tp=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},kp=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)yg(n,e).matches!==null&&this.queries[e].setDirty()}},qd=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=hR(n):this.predicate=n}},Rp=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Ap=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,dR(e,o)),this.matchTNodeWithReadOption(n,e,Pd(e,n,o,!1,!1))}else i===Ge?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Pd(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===O||r===tt||r===Ge&&e.type&4)this.addMatch(e.index,-2);else{let o=Pd(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function dR(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function uR(t,n){return t.type&11?da(t,n):t.type&4?du(t,n):null}function mR(t,n,e,i){return e===-1?uR(n,t):e===-2?fR(t,n,i):Gs(t,t[J],e,n)}function fR(t,n,e){if(e===O)return da(n,t);if(e===Ge)return du(n,t);if(e===tt)return Gw(n,t)}function qw(t,n,e,i){let r=n[Xn].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let u=o[c];s.push(mR(n,u,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function Np(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=qw(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],u=n[-l];for(let h=et;h<u.length;h++){let g=u[h];g[ur]===g[mt]&&Np(g[J],g,c,i)}if(u[eo]!==null){let h=u[eo];for(let g=0;g<h.length;g++){let _=h[g];Np(_[J],_,c,i)}}}}}return i}function bg(t,n){return t[Xn].queries[n].queryList}function Qw(t,n,e){let i=new Nn((e&4)===4);return my(t,n,i,i.destroy),(n[Xn]??=new kp).queries.push(new Tp(i))-1}function Yw(t,n,e){let i=We();return i.firstCreatePass&&(Kw(i,new qd(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),Qw(i,re(),n)}function Zw(t,n,e,i){let r=We();if(r.firstCreatePass){let o=ft();Kw(r,new qd(n,e,i),o.index),pR(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return Qw(r,re(),e)}function hR(t){return t.split(",").map(n=>n.trim())}function Kw(t,n,e){t.queries===null&&(t.queries=new Rp),t.queries.track(new Ap(n,e))}function pR(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function yg(t,n){return t.queries.getByIndex(n)}function Xw(t,n){let e=t[J],i=yg(e,n);return i.crossesNgTemplate?Np(e,t,n,[]):qw(e,t,i,n)}function Jw(t,n,e){let i,r=ps(()=>{i._dirtyCounter();let o=gR(i,t);if(n&&o===void 0)throw new k(-951,!1);return o});return i=r[nt],i._dirtyCounter=D(0),i._flatValue=void 0,r}function wg(t){return Jw(!0,!1,t)}function Cg(t){return Jw(!0,!0,t)}function eC(t,n){let e=t[nt];e._lView=re(),e._queryIndex=n,e._queryList=bg(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function gR(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[ae]&4)return n?void 0:Nt;let r=bg(e,i),o=Xw(e,i);return r.reset(o,O0),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var ri=class{},mu=class{};var Qd=class extends ri{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Wd(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=hh(n);this._bootstrapComponents=ow(o.bootstrap),this._r3Injector=Wh(n,e,[{provide:ri,useValue:this},{provide:al,useValue:this.componentFactoryResolver},...i],Os(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Yd=class extends mu{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Qd(this.moduleType,n,[])}};var Zs=class extends ri{injector;componentFactoryResolver=new Wd(this);instance=null;constructor(n){super();let e=new Qr([...n.providers,{provide:ri,useValue:this},{provide:al,useValue:this.componentFactoryResolver}],n.parent||qo(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function sl(t,n,e=null){return new Zs({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var _R=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=wh(!1,e.type),r=i.length>0?sl([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=x({token:t,providedIn:"environment",factory:()=>new t(H(Be))})}return t})();function V(t){return Xs(()=>{let n=tC(t),e=te(C({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Wp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(_R).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||On.Emulated,styles:t.styles||Nt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&gr("NgStandalone"),nC(e);let i=t.dependencies;return e.directiveDefs=c0(i,vR),e.pipeDefs=c0(i,Wb),e.id=wR(e),e})}function vR(t){return Ti(t)||ph(t)}function Y(t){return Xs(()=>({type:t.type,bootstrap:t.bootstrap||Nt,declarations:t.declarations||Nt,imports:t.imports||Nt,exports:t.exports||Nt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function bR(t,n){if(t==null)return cr;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=iu.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function yR(t){if(t==null)return cr;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function E(t){return Xs(()=>{let n=tC(t);return nC(n),n})}function tC(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||cr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Nt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:bR(t.inputs,n),outputs:yR(t.outputs),debugInfo:null}}function nC(t){t.features?.forEach(n=>n(t))}function c0(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function wR(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function CR(t){return Object.getPrototypeOf(t.prototype).constructor}function X(t){let n=CR(t.type),e=!0,i=[t];for(;n;){let r;if(ei(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new k(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=np(t.inputs),a.declaredInputs=np(t.declaredInputs),a.outputs=np(t.outputs);let s=r.hostBindings;s&&IR(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&ER(t,l),c&&SR(t,c),xR(t,r),$b(t.outputs,r.outputs),ei(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===X&&(e=!1)}}n=Object.getPrototypeOf(n)}DR(i)}function xR(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function DR(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=oa(r.hostAttrs,e=oa(e,r.hostAttrs))}}function np(t){return t===cr?{}:t===Nt?[]:t}function ER(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function SR(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function IR(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function iC(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=oa(t.mergedAttrs,t.attrs);let u=t.tView=ng(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Xo(t,!1);let l=TR(e,n,t,i);Id()&&cg(e,n,l,t),aa(l,n);let c=Aw(l,n,l,t);n[i+Je]=c,rg(n,c),lR(c,t,n)}function MR(t,n,e,i,r,o,a,s,l,c,u){let h=e+Je,g;return n.firstCreatePass?(g=ma(n,h,4,a||null,s||null),wd()&&Bw(n,t,g,nn(n.consts,c),ug),C0(n,g)):g=n.data[h],iC(g,t,n,e,i,r,o,l),Zo(g)&&lu(n,t,g),c!=null&&il(t,g,u),g}function la(t,n,e,i,r,o,a,s,l,c,u){let h=e+Je,g;if(n.firstCreatePass){if(g=ma(n,h,4,a||null,s||null),c!=null){let _=nn(n.consts,c);g.localNames=[];for(let b=0;b<_.length;b+=2)g.localNames.push(_[b],-1)}}else g=n.data[h];return iC(g,t,n,e,i,r,o,l),c!=null&&il(t,g,u),g}function se(t,n,e,i,r,o,a,s){let l=re(),c=We(),u=nn(c.consts,o);return MR(l,c,t,n,e,i,r,u,void 0,a,s),se}function fu(t,n,e,i,r,o,a,s){let l=re(),c=We(),u=nn(c.consts,o);return la(l,c,t,n,e,i,r,u,void 0,a,s),fu}var TR=kR;function kR(t,n,e,i){return Us(!0),n[je].createComment("")}var hu=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function oi(t){return typeof t=="function"&&t[nt]!==void 0}function xg(t){return oi(t)&&typeof t.set=="function"}var Dg=new y("");function _r(t){return!!t&&typeof t.then=="function"}function Eg(t){return!!t&&typeof t.subscribe=="function"}var rC=new y("");var Sg=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=d(rC,{optional:!0})??[];injector=d(ce);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=vt(this.injector,r);if(_r(o))e.push(o);else if(Eg(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pu=new y("");function oC(){Tf(()=>{let t="";throw new k(600,t)})}function aC(t){return t.isBoundToModule}var RR=10;var on=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d(rn);afterRenderManager=d(ou);zonelessEnabled=d(Hs);rootEffectScheduler=d(Td);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new M;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d(Fi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ue(e=>!e))}constructor(){d(Pn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=d(Be);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=ce.NULL){return this._injector.get(U).run(()=>{Le(De.BootstrapComponentStart);let a=e instanceof uu;if(!this._injector.get(Sg).done){let b="";throw new k(405,b)}let l;a?l=e:l=this._injector.get(al).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=aC(l)?void 0:this._injector.get(ri),u=i||l.selector,h=l.create(r,[],u,c),g=h.location.nativeElement,_=h.injector.get(Dg,null);return _?.registerApplication(g),h.onDestroy(()=>{this.detachView(h.hostView),Ws(this.components,h),_?.unregisterApplication(g)}),this._loadComponent(h),Le(De.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Le(De.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(ru.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Le(De.ChangeDetectionEnd),new k(101,!1);let e=K(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,K(e),this.afterTick.next(),Le(De.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(st,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<RR;){Le(De.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Le(De.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Bs(r))continue;let o=i&&!this.zonelessEnabled?0:1;Mw(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Bs(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Ws(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(pu,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Ws(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new k(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ws(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function gu(t,n){let e=re(),i=Oi();if(gn(e,i,n)){let r=We(),o=Jo();if(cu(o,r,e,t,n))Jn(o)&&ww(e,o.index);else{let s=hn(o,e);Cw(e[je],s,null,o.value,t,n,null)}}return gu}function me(t,n,e,i){let r=re(),o=Oi();if(gn(r,o,n)){let a=We(),s=Jo();ak(s,r,t,n,e,i)}return me}var Op=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function ip(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function AR(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){K(i);let c=n.length-1;for(K(null);a<=s&&a<=c;){let u=t.at(a),h=n[a],g=ip(a,u,a,h,e);if(g!==0){g<0&&t.updateValue(a,h),a++;continue}let _=t.at(s),b=n[c],S=ip(s,_,c,b,e);if(S!==0){S<0&&t.updateValue(s,b),s--,c--;continue}let I=e(a,u),T=e(s,_),ve=e(a,h);if(Object.is(ve,T)){let at=e(c,b);Object.is(at,I)?(t.swap(a,s),t.updateValue(s,b),c--,s--):t.move(s,a),t.updateValue(a,h),a++;continue}if(r??=new Zd,o??=u0(t,a,s,e),Fp(t,r,a,ve))t.updateValue(a,h),a++,s++;else if(o.has(ve))r.set(I,t.detach(a)),s--;else{let at=t.create(a,n[a]);t.attach(a,at),a++,s++}}for(;a<=c;)d0(t,r,e,a,n[a]),a++}else if(n!=null){K(i);let c=n[Symbol.iterator]();K(null);let u=c.next();for(;!u.done&&a<=s;){let h=t.at(a),g=u.value,_=ip(a,h,a,g,e);if(_!==0)_<0&&t.updateValue(a,g),a++,u=c.next();else{r??=new Zd,o??=u0(t,a,s,e);let b=e(a,g);if(Fp(t,r,a,b))t.updateValue(a,g),a++,s++,u=c.next();else if(!o.has(b))t.attach(a,t.create(a,g)),a++,s++,u=c.next();else{let S=e(a,h);r.set(S,t.detach(a)),s--}}}for(;!u.done;)d0(t,r,e,t.length,u.value),u=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function Fp(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function d0(t,n,e,i,r){if(Fp(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function u0(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Zd=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function F(t,n,e,i,r,o,a,s){gr("NgControlFlow");let l=re(),c=We(),u=nn(c.consts,o);return la(l,c,t,n,e,i,r,u,256,a,s),Ig}function Ig(t,n,e,i,r,o,a,s){gr("NgControlFlow");let l=re(),c=We(),u=nn(c.consts,o);return la(l,c,t,n,e,i,r,u,512,a,s),Ig}function P(t,n){gr("NgControlFlow");let e=re(),i=Oi(),r=e[i]!==qt?e[i]:-1,o=r!==-1?Kd(e,Je+r):void 0,a=0;if(gn(e,i,t)){let s=K(null);try{if(o!==void 0&&Ow(o,a),t!==-1){let l=Je+t,c=Kd(e,l),u=Bp(e[J],l),h=Pw(c,u,e),g=rl(e,u,n,{dehydratedView:h});ol(c,g,a,sa(u,h))}}finally{K(s)}}else if(o!==void 0){let s=Nw(o,a);s!==void 0&&(s[rt]=n)}}var Pp=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-et}};function _u(t,n){return n}var Lp=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function bt(t,n,e,i,r,o,a,s,l,c,u,h,g){gr("NgControlFlow");let _=re(),b=We(),S=l!==void 0,I=re(),T=s?a.bind(I[Bt][rt]):a,ve=new Lp(S,T);I[Je+t]=ve,la(_,b,t+1,n,e,i,r,nn(b.consts,o),256),S&&la(_,b,t+2,l,c,u,h,nn(b.consts,g),512)}var Vp=class extends Op{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-et}at(n){return this.getLView(n)[rt].$implicit}attach(n,e){let i=e[Zr];this.needsIndexUpdate||=n!==this.length,ol(this.lContainer,e,n,sa(this.templateTNode,i)),NR(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,OR(this.lContainer,n),FR(this.lContainer,n)}create(n,e){let i=zd(this.lContainer,this.templateTNode.tView.ssrId);return rl(this.hostLView,this.templateTNode,new Pp(this.lContainer,e,n),{dehydratedView:i})}destroy(n){au(n[J],n)}updateValue(n,e){this.getLView(n)[rt].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[rt].$index=n}getLView(n){return PR(this.lContainer,n)}};function yt(t){let n=K(null),e=ti();try{let i=re(),r=i[J],o=i[e],a=e+1,s=Kd(i,a);if(o.liveCollection===void 0){let c=Bp(r,a);o.liveCollection=new Vp(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(AR(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Oi(),u=l.length===0;if(gn(i,c,u)){let h=e+2,g=Kd(i,h);if(u){let _=Bp(r,h),b=Pw(g,_,i),S=rl(i,_,void 0,{dehydratedView:b});ol(g,S,0,sa(_,b))}else r.firstUpdatePass&&Tk(g),Ow(g,0)}}}finally{K(n)}}function Kd(t,n){return t[n]}function NR(t,n){if(t.length<=et)return;let e=et+n,i=t[e],r=i?i[mr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Ri];BT(o,r),oo.delete(i[Ai]),r.detachedLeaveAnimationFns=void 0}}function OR(t,n){if(t.length<=et)return;let e=et+n,i=t[e],r=i?i[mr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function FR(t,n){return Ys(t,n)}function PR(t,n){return Nw(t,n)}function Bp(t,n){return vd(t,n)}function Z(t,n,e){let i=re(),r=Oi();if(gn(i,r,n)){let o=We(),a=Jo();bw(a,i,t,n,i[je],e)}return Z}function jp(t,n,e,i,r){cu(n,t,e,r?"class":"style",i)}function m(t,n,e,i){let r=re(),o=r[J],a=t+Je,s=o.firstCreatePass?gg(a,r,2,n,ug,wd(),e,i):o.data[a];if(Jn(s)){let l=r[Tn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate($w(c),()=>(m0(t,n,r,s,i),m))}}return m0(t,n,r,s,i),m}function m0(t,n,e,i,r){if(mg(i,e,t,n,sC),Zo(i)){let o=e[J];lu(o,e,i),qp(o,i,e)}r!=null&&il(e,i)}function f(){let t=We(),n=ft(),e=fg(n);return t.firstCreatePass&&_g(t,e),Lh(e)&&Vh(),Fh(),e.classesWithoutHost!=null&&yM(e)&&jp(t,e,re(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&wM(e)&&jp(t,e,re(),e.stylesWithoutHost,!1),f}function ne(t,n,e,i){return m(t,n,e,i),f(),ne}function an(t,n,e,i){let r=re(),o=r[J],a=t+Je,s=o.firstCreatePass?zk(a,o,2,n,e,i):o.data[a];return mg(s,r,t,n,sC),i!=null&&il(r,s),an}function sn(){let t=ft(),n=fg(t);return Lh(n)&&Vh(),Fh(),sn}function _n(t,n,e,i){return an(t,n,e,i),sn(),_n}var sC=(t,n,e,i,r)=>(Us(!0),X0(n[je],i,My()));function Ee(t,n,e){let i=re(),r=i[J],o=t+Je,a=r.firstCreatePass?gg(o,i,8,"ng-container",ug,wd(),n,e):r.data[o];if(mg(a,i,t,"ng-container",LR),Zo(a)){let s=i[J];lu(s,i,a),qp(s,a,i)}return e!=null&&il(i,a),Ee}function Se(){let t=We(),n=ft(),e=fg(n);return t.firstCreatePass&&_g(t,e),Se}function Ft(t,n,e){return Ee(t,n,e),Se(),Ft}var LR=(t,n,e,i,r)=>(Us(!0),hT(n[je],""));function Ie(){return re()}function Ln(t,n,e){let i=re(),r=Oi();if(gn(i,r,n)){let o=We(),a=Jo();yw(a,i,t,n,i[je],e)}return Ln}var ll="en-US";var VR=ll;function lC(t){typeof t=="string"&&(VR=t.toLowerCase().replace(/_/g,"-"))}function R(t,n,e){let i=re(),r=We(),o=ft();return cC(r,i,i[je],o,t,n,e),R}function cC(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=ep(i,n,o),qk(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let h=0;h<u.length;h+=2){let g=u[h],_=u[h+1];l??=ep(i,n,o),a0(i,n,g,_,r,l)}if(c&&c.length)for(let h of c)l??=ep(i,n,o),a0(i,n,h,r,r,l)}}function w(t=1){return Iy(t)}function BR(t,n){let e=null,i=DT(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?sw(t,o,!0):IT(i,o))return r}return e}function xe(t){let n=re()[Bt][Vt];if(!n.projection){let e=t?t.length:1,i=n.projection=Kb(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?BR(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function z(t,n=0,e,i,r,o){let a=re(),s=We(),l=i?t+1:null;l!==null&&la(a,s,l,i,r,o,null,e);let c=ma(s,Je+t,16,null,e||null);c.projection===null&&(c.projection=n),Uh();let h=!a[Zr]||Ph();a[Bt][Vt].projection[c.projection]===null&&l!==null?jR(a,s,l):h&&!tu(c)&&ZT(s,a,c)}function jR(t,n,e){let i=Je+e,r=n.data[i],o=t[i],a=zd(o,r.tView.ssrId),s=rl(t,r,void 0,{dehydratedView:a});ol(o,s,0,sa(r,a))}function Ze(t,n,e,i){return Zw(t,n,e,i),Ze}function lt(t,n,e){return Yw(t,n,e),lt}function A(t){let n=re(),e=We(),i=Dd();js(i+1);let r=yg(e,i);if(t.dirty&&ly(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Xw(n,i);t.reset(o,O0),t.notifyOnChanges()}return!0}return!1}function N(){return bg(re(),Dd())}function vu(t,n,e,i,r){return eC(n,Zw(t,e,i,r)),vu}function bu(t,n,e,i){return eC(t,Yw(n,e,i)),bu}function yu(t=1){js(Dd()+t)}function qe(t){let n=gy();return sy(n,Je+t)}function Nd(t,n){return t<<17|n<<2}function so(t){return t>>17&32767}function UR(t){return(t&2)==2}function HR(t,n){return t&131071|n<<17}function Up(t){return t|2}function ca(t){return(t&131068)>>2}function rp(t,n){return t&-131069|n<<2}function zR(t){return(t&1)===1}function Hp(t){return t|1}function $R(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=so(a),l=ca(a);t[i]=e;let c=!1,u;if(Array.isArray(e)){let h=e;u=h[1],(u===null||Go(h,u)>0)&&(c=!0)}else u=e;if(r)if(l!==0){let g=so(t[s+1]);t[i+1]=Nd(g,s),g!==0&&(t[g+1]=rp(t[g+1],i)),t[s+1]=HR(t[s+1],i)}else t[i+1]=Nd(s,0),s!==0&&(t[s+1]=rp(t[s+1],i)),s=i;else t[i+1]=Nd(l,0),s===0?s=i:t[l+1]=rp(t[l+1],i),l=i;c&&(t[i+1]=Up(t[i+1])),f0(t,u,i,!0),f0(t,u,i,!1),WR(n,u,t,i,o),a=Nd(s,l),o?n.classBindings=a:n.styleBindings=a}function WR(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Go(o,n)>=0&&(e[i+1]=Hp(e[i+1]))}function f0(t,n,e,i){let r=t[e+1],o=n===null,a=i?so(r):ca(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];GR(l,n)&&(s=!0,t[a+1]=i?Hp(c):Up(c)),a=i?so(c):ca(c)}s&&(t[e+1]=i?Up(r):Hp(r))}function GR(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Go(t,n)>=0:!1}var An={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function qR(t){return t.substring(An.key,An.keyEnd)}function QR(t){return YR(t),dC(t,uC(t,0,An.textEnd))}function dC(t,n){let e=An.textEnd;return e===n?-1:(n=An.keyEnd=ZR(t,An.key=n,e),uC(t,n,e))}function YR(t){An.key=0,An.keyEnd=0,An.value=0,An.valueEnd=0,An.textEnd=t.length}function uC(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function ZR(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Ut(t,n,e){return mC(t,n,e,!1),Ut}function $(t,n){return mC(t,n,null,!0),$}function ct(t){XR(rA,KR,t,!0)}function KR(t,n){for(let e=QR(n);e>=0;e=dC(n,e))pd(t,qR(n),!0)}function mC(t,n,e,i){let r=re(),o=We(),a=Cd(2);if(o.firstUpdatePass&&hC(o,t,a,i),n!==qt&&gn(r,a,n)){let s=o.data[ti()];pC(o,s,r,r[je],t,r[a+1]=aA(n,e),i,a)}}function XR(t,n,e,i){let r=We(),o=Cd(2);r.firstUpdatePass&&hC(r,null,o,i);let a=re();if(e!==qt&&gn(a,o,e)){let s=r.data[ti()];if(gC(s,i)&&!fC(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=dd(l,e||"")),jp(r,s,a,e,i)}else oA(r,s,a,a[je],a[o+1],a[o+1]=iA(t,n,e),i,o)}}function fC(t,n){return n>=t.expandoStartIndex}function hC(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[ti()],a=fC(t,e);gC(o,i)&&n===null&&!a&&(n=!1),n=JR(r,o,n,i),$R(r,o,n,e,a,i)}}function JR(t,n,e,i){let r=xy(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=op(null,t,n,e,i),e=Ks(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=op(r,t,n,e,i),o===null){let l=eA(t,n,i);l!==void 0&&Array.isArray(l)&&(l=op(null,t,n,l[1],i),l=Ks(l,n.attrs,i),tA(t,n,i,l))}else o=nA(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function eA(t,n,e){let i=e?n.classBindings:n.styleBindings;if(ca(i)!==0)return t[so(i)]}function tA(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[so(r)]=i}function nA(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=Ks(i,a,e)}return Ks(i,n.attrs,e)}function op(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=Ks(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function Ks(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),pd(t,a,e?!0:n[++o]))}return t===void 0?null:t}function iA(t,n,e){if(e==null||e==="")return Nt;let i=[],r=Fn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function rA(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&pd(t,i,e)}function oA(t,n,e,i,r,o,a,s){r===qt&&(r=Nt);let l=0,c=0,u=0<r.length?r[0]:null,h=0<o.length?o[0]:null;for(;u!==null||h!==null;){let g=l<r.length?r[l+1]:void 0,_=c<o.length?o[c+1]:void 0,b=null,S;u===h?(l+=2,c+=2,g!==_&&(b=h,S=_)):h===null||u!==null&&u<h?(l+=2,b=u):(c+=2,b=h,S=_),b!==null&&pC(t,n,e,i,b,S,a,s),u=l<r.length?r[l]:null,h=c<o.length?o[c]:null}}function pC(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],u=zR(c)?h0(l,n,e,r,ca(c),a):void 0;if(!Xd(u)){Xd(o)||UR(c)&&(o=h0(l,null,e,r,s,a));let h=Th(ti(),e);XT(i,a,h,r,o)}}function h0(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),u=c?l[1]:l,h=u===null,g=e[r+1];g===qt&&(g=h?Nt:void 0);let _=h?gd(g,i):u===i?g:void 0;if(c&&!Xd(_)&&(_=gd(l,i)),Xd(_)&&(s=_,a))return s;let b=t[r+1];r=a?so(b):ca(b)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=gd(l,i))}return s}function Xd(t){return t!==void 0}function aA(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Os(Fn(t)))),t}function gC(t,n){return(t.flags&(n?8:16))!==0}function p(t,n=""){let e=re(),i=We(),r=t+Je,o=i.firstCreatePass?ma(i,r,1,n,null):i.data[r],a=sA(i,e,o,n);e[r]=a,Id()&&cg(i,e,a,o),Xo(o,!1)}var sA=(t,n,e,i)=>(Us(!0),mT(n[je],i));function lA(t,n,e,i=""){return gn(t,Oi(),e)?n+Wo(e)+i:qt}function cA(t,n,e,i,r,o=""){let a=vy(),s=Gk(t,a,e,r);return Cd(2),s?n+Wo(e)+i+Wo(r)+o:qt}function _e(t){return Oe("",t),_e}function Oe(t,n,e){let i=re(),r=lA(i,t,n,e);return r!==qt&&_C(i,ti(),r),Oe}function Vn(t,n,e,i,r){let o=re(),a=cA(o,t,n,e,i,r);return a!==qt&&_C(o,ti(),a),Vn}function _C(t,n,e){let i=Th(n,t);fT(t[je],i,e)}function Me(t,n,e){xg(n)&&(n=n());let i=re(),r=Oi();if(gn(i,r,n)){let o=We(),a=Jo();bw(a,i,t,n,i[je],e)}return Me}function ke(t,n){let e=xg(t);return e&&t.set(n),e}function Te(t,n){let e=re(),i=We(),r=ft();return cC(i,e,e[je],r,t,n),Te}function p0(t,n,e){let i=We();i.firstCreatePass&&vC(n,i.data,i.blueprint,ei(t),e)}function vC(t,n,e,i,r){if(t=St(t),Array.isArray(t))for(let o=0;o<t.length;o++)vC(t[o],n,e,i,r);else{let o=We(),a=re(),s=ft(),l=qr(t)?t:St(t.provide),c=xh(t),u=s.providerIndexes&1048575,h=s.directiveStart,g=s.providerIndexes>>20;if(qr(t)||!t.multi){let _=new ro(c,r,ye,null),b=sp(l,n,r?u:u+g,h);b===-1?(cp(Ud(s,a),o,l),ap(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(_),a.push(_)):(e[b]=_,a[b]=_)}else{let _=sp(l,n,u+g,h),b=sp(l,n,u,u+g),S=_>=0&&e[_],I=b>=0&&e[b];if(r&&!I||!r&&!S){cp(Ud(s,a),o,l);let T=mA(r?uA:dA,e.length,r,i,c,t);!r&&I&&(e[b].providerFactory=T),ap(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(T),a.push(T)}else{let T=bC(e[r?b:_],c,!r&&i);ap(o,t,_>-1?_:b,T)}!r&&i&&I&&e[b].componentProviders++}}}function ap(t,n,e,i){let r=qr(n),o=iy(n);if(r||o){let l=(o?St(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=c.indexOf(e);u===-1?c.push(e,[i,l]):c[u+1].push(i,l)}else c.push(e,l)}}}function bC(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function sp(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function dA(t,n,e,i,r){return zp(this.multi,[])}function uA(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Gs(i,i[J],this.providerFactory.index,r);a=l.slice(0,s),zp(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],zp(o,a);return a}function zp(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function mA(t,n,e,i,r,o){let a=new ro(t,e,ye,null);return a.multi=[],a.index=n,a.componentProviders=0,bC(a,r,i&&!e),a}function pe(t,n){return e=>{e.providersResolver=(i,r)=>p0(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>p0(i,r?r(n):n,!0))}}function Qt(t,n){let e=_y()+t,i=re();return i[e]===qt?$k(i,e,n()):Wk(i,e)}function wu(t,n){return du(t,n)}var Jd=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},Mg=(()=>{class t{compileModuleSync(e){return new Yd(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=hh(e),o=ow(r.declarations).reduce((a,s)=>{let l=Ti(s);return l&&a.push(new ao(l)),a},[]);return new Jd(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yC=(()=>{class t{applicationErrorHandler=d(rn);appRef=d(on);taskService=d(Fi);ngZone=d(U);zonelessEnabled=d(Hs);tracing=d(Pn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new oe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(As):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(Zh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Ay:Gh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(As+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wC(){return[{provide:Kn,useExisting:yC},{provide:U,useClass:Ns},{provide:Hs,useValue:!0}]}function fA(){return typeof $localize<"u"&&$localize.locale||ll}var Cu=new y("",{factory:()=>d(Cu,{optional:!0,skipSelf:!0})||fA()});function Re(t){return Bb(t)}function wt(t,n){return ps(t,n?.equal)}var hA=t=>t;function Tg(t,n){if(typeof t=="function"){let e=Qf(t,hA,n?.equal);return CC(e,n?.debugName)}else{let e=Qf(t.source,t.computation,t.equal);return CC(e,t.debugName)}}function CC(t,n){let e=t[nt],i=t;return i.set=r=>Lb(e,r),i.update=r=>Vb(e,r),i.asReadonly=Md.bind(t),i}var kC=Symbol("InputSignalNode#UNSET"),RA=te(C({},gs),{transformFn:void 0,applyValueToInputSignal(t,n){Nr(t,n)}});function RC(t,n){let e=Object.create(RA);e.value=t,e.transformFn=n?.transform;function i(){if(Ji(e),e.value===kC){let r=null;throw new k(-950,r)}return e.value}return i[nt]=e,i}var Bn=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Js(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},AC=(()=>{let t=new y("");return t.__NG_ELEMENT_ID__=n=>{let e=ft();if(e===null)throw new k(-204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new k(-204,!1)},t})();function xC(t,n){return RC(t,n)}function AA(t){return RC(kC,t)}var NC=(xC.required=AA,xC);function DC(t,n){return wg(n)}function NA(t,n){return Cg(n)}var dl=(DC.required=NA,DC);function EC(t,n){return wg(n)}function OA(t,n){return Cg(n)}var OC=(EC.required=OA,EC);var Rg=new y(""),FA=new y("");function cl(t){return!t.moduleRef}function PA(t){let n=cl(t)?t.r3Injector:t.moduleRef.injector,e=n.get(U);return e.run(()=>{cl(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(rn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),cl(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Rg);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Rg);a.add(o),t.moduleRef.onDestroy(()=>{Ws(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return VA(i,e,()=>{let o=n.get(Fi),a=o.add(),s=n.get(Sg);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(Cu,ll);if(lC(l||ll),!n.get(FA,!0))return cl(t)?n.get(on):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(cl(t)){let u=n.get(on);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return LA?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var LA;function VA(t,n,e){try{let i=e();return _r(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var xu=null;function BA(t=[],n){return ce.create({name:n,providers:[{provide:Ls,useValue:"platform"},{provide:Rg,useValue:new Set([()=>xu=null])},...t]})}function jA(t=[]){if(xu)return xu;let n=BA(t);return xu=n,oC(),UA(n),n}function UA(t){let n=t.get(eu,null);vt(t,()=>{n?.forEach(e=>e())})}var HA=1e4;var H9=HA-1e3;var Qe=(()=>{class t{static __NG_ELEMENT_ID__=zA}return t})();function zA(t){return $A(ft(),re(),(t&16)===16)}function $A(t,n,e){if(Jn(t)&&!e){let i=pn(t.index,n);return new pr(i,i)}else if(t.type&175){let i=n[Bt];return new pr(i,n)}return null}var Ag=class{supports(n){return vg(n)}create(n){return new Ng(n)}},WA=(t,n)=>n,Ng=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(n){this._trackByFn=n||WA}forEachItem(n){let e;for(e=this._itHead;e!==null;e=e._next)n(e)}forEachOperation(n){let e=this._itHead,i=this._removalsHead,r=0,o=null;for(;e||i;){let a=!i||e&&e.currentIndex<SC(i,r,o)?e:i,s=SC(a,r,o),l=a.currentIndex;if(a===i)r--,i=i._nextRemoved;else if(e=e._next,a.previousIndex==null)r++;else{o||(o=[]);let c=s-r,u=l-r;if(c!=u){for(let g=0;g<c;g++){let _=g<o.length?o[g]:o[g]=0,b=_+g;u<=b&&b<c&&(o[g]=_+1)}let h=a.previousIndex;o[h]=u-c}}s!==l&&n(a,s,l)}}forEachPreviousItem(n){let e;for(e=this._previousItHead;e!==null;e=e._nextPrevious)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachMovedItem(n){let e;for(e=this._movesHead;e!==null;e=e._nextMoved)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}forEachIdentityChange(n){let e;for(e=this._identityChangesHead;e!==null;e=e._nextIdentityChange)n(e)}diff(n){if(n==null&&(n=[]),!vg(n))throw new k(900,!1);return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let e=this._itHead,i=!1,r,o,a;if(Array.isArray(n)){this.length=n.length;for(let s=0;s<this.length;s++)o=n[s],a=this._trackByFn(s,o),e===null||!Object.is(e.trackById,a)?(e=this._mismatch(e,o,a,s),i=!0):(i&&(e=this._verifyReinsertion(e,o,a,s)),Object.is(e.item,o)||this._addIdentityChange(e,o)),e=e._next}else r=0,Uw(n,s=>{a=this._trackByFn(r,s),e===null||!Object.is(e.trackById,a)?(e=this._mismatch(e,s,a,r),i=!0):(i&&(e=this._verifyReinsertion(e,s,a,r)),Object.is(e.item,s)||this._addIdentityChange(e,s)),e=e._next,r++}),this.length=r;return this._truncate(e),this.collection=n,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let n;for(n=this._previousItHead=this._itHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._additionsHead;n!==null;n=n._nextAdded)n.previousIndex=n.currentIndex;for(this._additionsHead=this._additionsTail=null,n=this._movesHead;n!==null;n=n._nextMoved)n.previousIndex=n.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(n,e,i,r){let o;return n===null?o=this._itTail:(o=n._prev,this._remove(n)),n=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._reinsertAfter(n,o,r)):(n=this._linkedRecords===null?null:this._linkedRecords.get(i,r),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._moveAfter(n,o,r)):n=this._addAfter(new Og(e,i),o,r)),n}_verifyReinsertion(n,e,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?n=this._reinsertAfter(o,n._prev,r):n.currentIndex!=r&&(n.currentIndex=r,this._addToMoves(n,r)),n}_truncate(n){for(;n!==null;){let e=n._next;this._addToRemovals(this._unlink(n)),n=e}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(n,e,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(n);let r=n._prevRemoved,o=n._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(n,e,i),this._addToMoves(n,i),n}_moveAfter(n,e,i){return this._unlink(n),this._insertAfter(n,e,i),this._addToMoves(n,i),n}_addAfter(n,e,i){return this._insertAfter(n,e,i),this._additionsTail===null?this._additionsTail=this._additionsHead=n:this._additionsTail=this._additionsTail._nextAdded=n,n}_insertAfter(n,e,i){let r=e===null?this._itHead:e._next;return n._next=r,n._prev=e,r===null?this._itTail=n:r._prev=n,e===null?this._itHead=n:e._next=n,this._linkedRecords===null&&(this._linkedRecords=new Du),this._linkedRecords.put(n),n.currentIndex=i,n}_remove(n){return this._addToRemovals(this._unlink(n))}_unlink(n){this._linkedRecords!==null&&this._linkedRecords.remove(n);let e=n._prev,i=n._next;return e===null?this._itHead=i:e._next=i,i===null?this._itTail=e:i._prev=e,n}_addToMoves(n,e){return n.previousIndex===e||(this._movesTail===null?this._movesTail=this._movesHead=n:this._movesTail=this._movesTail._nextMoved=n),n}_addToRemovals(n){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Du),this._unlinkedRecords.put(n),n.currentIndex=null,n._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=n,n._prevRemoved=null):(n._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=n),n}_addIdentityChange(n,e){return n.item=e,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=n:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=n,n}},Og=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(n,e){this.item=n,this.trackById=e}},Fg=class{_head=null;_tail=null;add(n){this._head===null?(this._head=this._tail=n,n._nextDup=null,n._prevDup=null):(this._tail._nextDup=n,n._prevDup=this._tail,n._nextDup=null,this._tail=n)}get(n,e){let i;for(i=this._head;i!==null;i=i._nextDup)if((e===null||e<=i.currentIndex)&&Object.is(i.trackById,n))return i;return null}remove(n){let e=n._prevDup,i=n._nextDup;return e===null?this._head=i:e._nextDup=i,i===null?this._tail=e:i._prevDup=e,this._head===null}},Du=class{map=new Map;put(n){let e=n.trackById,i=this.map.get(e);i||(i=new Fg,this.map.set(e,i)),i.add(n)}get(n,e){let i=n,r=this.map.get(i);return r?r.get(n,e):null}remove(n){let e=n.trackById;return this.map.get(e).remove(n)&&this.map.delete(e),n}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function SC(t,n,e){let i=t.previousIndex;if(i===null)return i;let r=0;return e&&i<e.length&&(r=e[i]),i+n+r}function IC(){return new ji([new Ag])}var ji=(()=>{class t{factories;static \u0275prov=x({token:t,providedIn:"root",factory:IC});constructor(e){this.factories=e}static create(e,i){if(i!=null){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=d(t,{optional:!0,skipSelf:!0});return t.create(e,i||IC())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i!=null)return i;throw new k(901,!1)}}return t})();function FC(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Le(De.BootstrapApplicationStart);try{let o=r?.injector??jA(i),a=[wC(),Oy,...e||[]],s=new Zs({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return PA({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Le(De.BootstrapApplicationEnd)}}function L(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function vn(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var kg=Symbol("NOT_SET"),PC=new Set,GA=te(C({},gs),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:kg,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==kg&&!No(this))return this.signal;try{for(let r of this.cleanup??PC)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Di(this),i;try{i=this.userFn.apply(null,n)}finally{er(this,e)}return(this.value===kg||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Pg=class extends qs{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Ot),a),this.scheduler=r;for(let s of ag){let l=e[s];if(l===void 0)continue;let c=Object.create(GA);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(Ji(c),c.value),c.signal[nt]=c,c.registerCleanupFn=u=>(c.cleanup??=new Set).add(u),this.nodes[s]=c,this.hooks[s]=u=>c.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??PC)e()}finally{tr(n)}}};function LC(t,n){let e=n?.injector??d(ce),i=e.get(Kn),r=e.get(ou),o=e.get(Pn,null,{optional:!0});r.impl??=e.get(sg);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(ta,null,{optional:!0}),l=new Pg(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function Eu(t,n){let e=Ti(t),i=n.elementInjector||qo();return new ao(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var VC=null;function bn(){return VC}function Lg(t){VC??=t}var ul=class{},ha=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(BC),providedIn:"platform"})}return t})();var BC=(()=>{class t extends ha{_location;_history;_doc=d(ee);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return bn().getBaseHref(this._doc)}onPopState(e){let i=bn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=bn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function HC(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function jC(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function vr(t){return t&&t[0]!=="?"?`?${t}`:t}var pa=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(QA),providedIn:"root"})}return t})(),qA=new y(""),QA=(()=>{class t extends pa{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??d(ee).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return HC(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+vr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+vr(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+vr(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(H(ha),H(qA,8))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var br=(()=>{class t{_subject=new M;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=KA(jC(UC(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+vr(i))}normalize(e){return t.stripTrailingSlash(ZA(this._basePath,UC(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+vr(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+vr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=vr;static joinWithSlash=HC;static stripTrailingSlash=jC;static \u0275fac=function(i){return new(i||t)(H(pa))};static \u0275prov=x({token:t,factory:()=>YA(),providedIn:"root"})}return t})();function YA(){return new br(H(pa))}function ZA(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function UC(t){return t.replace(/\/index.html$/,"")}function KA(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Vg=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(ce);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(ye(tt))};static \u0275dir=E({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ue]})}return t})();var Yt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({})}return t})();function ml(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var co=class{};var Bg="browser";function ai(t){return t===Bg}var fl=class{_doc;constructor(n){this._doc=n}manager},Su=(()=>{class t extends fl{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Tu=new y(""),zg=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Su));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Su);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new k(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(H(Tu),H(U))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),jg="ng-app-id";function zC(t){for(let n of t)n.remove()}function $C(t,n){let e=n.createElement("style");return e.textContent=t,e}function e1(t,n,e,i){let r=t.head?.querySelectorAll(`style[${jg}="${n}"],link[${jg}="${n}"]`);if(r)for(let o of r)o.removeAttribute(jg),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Hg(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var $g=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,e1(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,$C);i?.forEach(r=>this.addUsage(r,this.external,Hg))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(zC(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])zC(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,$C(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Hg(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(H(ee),H(ua),H(lo,8),H(jt))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Ug={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Wg=/%COMP%/g;var GC="%COMP%",t1=`_nghost-${GC}`,n1=`_ngcontent-${GC}`,i1=!0,r1=new y("",{factory:()=>i1});function o1(t){return n1.replace(Wg,t)}function a1(t){return t1.replace(Wg,t)}function qC(t,n){return n.map(e=>e.replace(Wg,t))}var Gg=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new hl(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Mu?r.applyToHost(e):r instanceof pl&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(i.encapsulation){case On.Emulated:o=new Mu(l,c,i,this.appId,u,a,s,h);break;case On.ShadowDom:return new Iu(l,e,i,a,s,this.nonce,h,c);case On.ExperimentalIsolatedShadowDom:return new Iu(l,e,i,a,s,this.nonce,h);default:o=new pl(l,c,i,u,a,s,h);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(H(zg),H($g),H(ua),H(r1),H(ee),H(U),H(lo),H(Pn,8))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),hl=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Ug[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(WC(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(WC(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new k(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Ug[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Ug[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(ii.DashCase|ii.Important)?n.style.setProperty(e,i,r&ii.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&ii.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=bn().getGlobalEventTarget(this.doc,n),!n))throw new k(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function WC(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Iu=class extends hl{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=qC(i.id,c);for(let h of c){let g=document.createElement("style");a&&g.setAttribute("nonce",a),g.textContent=h,this.shadowRoot.appendChild(g)}let u=i.getExternalStyles?.();if(u)for(let h of u){let g=Hg(h,r);a&&g.setAttribute("nonce",a),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},pl=class extends hl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?qC(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&oo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Mu=class extends pl{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=o1(c),this.hostAttr=a1(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var ku=class t extends ul{supportsDOMEvents=!0;static makeCurrent(){Lg(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=s1();return e==null?null:l1(e)}resetBaseElement(){gl=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return ml(document.cookie,n)}},gl=null;function s1(){return gl=gl||document.head.querySelector("base"),gl?gl.getAttribute("href"):null}function l1(t){return new URL(t,document.baseURI).pathname}var c1=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),QC=["alt","control","meta","shift"],d1={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},u1={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},YC=(()=>{class t extends fl{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>bn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),QC.forEach(c=>{let u=i.indexOf(c);u>-1&&(i.splice(u,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=d1[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),QC.forEach(a=>{if(a!==r){let s=u1[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})();async function qg(t,n,e){let i=C({rootComponent:t},m1(n,e));return FC(i)}function m1(t,n){return{platformRef:n?.platformRef,appProviders:[..._1,...t?.providers??[]],platformProviders:g1}}function f1(){ku.makeCurrent()}function h1(){return new Lt}function p1(){return Gp(document),document}var g1=[{provide:jt,useValue:Bg},{provide:eu,useValue:f1,multi:!0},{provide:ee,useFactory:p1}];var _1=[{provide:Ls,useValue:"root"},{provide:Lt,useFactory:h1},{provide:Tu,useClass:Su,multi:!0},{provide:Tu,useClass:YC,multi:!0},Gg,$g,zg,{provide:st,useExisting:Gg},{provide:co,useClass:c1},[]];var Zt=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Nu=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Ou=class{encodeKey(n){return ZC(n)}encodeValue(n){return ZC(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function v1(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var b1=/%(\d[a-f0-9])/gi,y1={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ZC(t){return encodeURIComponent(t).replace(b1,(n,e)=>y1[e]??n)}function Ru(t){return`${t}`}var Ui=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ou,n.fromString){if(n.fromObject)throw new k(2805,!1);this.map=v1(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Ru):[Ru(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Ru(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Ru(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function w1(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function KC(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function XC(t){return typeof Blob<"u"&&t instanceof Blob}function JC(t){return typeof FormData<"u"&&t instanceof FormData}function C1(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var _l="Content-Type",Fu="Accept",tx="text/plain",nx="application/json",ix=`${nx}, ${tx}, */*`,ga=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(w1(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new k(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Zt,this.context??=new Nu,!this.params)this.params=new Ui,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||KC(this.body)||XC(this.body)||JC(this.body)||C1(this.body)?this.body:this.body instanceof Ui?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||JC(this.body)?null:XC(this.body)?this.body.type||null:KC(this.body)?null:typeof this.body=="string"?tx:this.body instanceof Ui?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?nx:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,u=n.credentials||this.credentials,h=n.referrer||this.referrer,g=n.integrity||this.integrity,_=n.referrerPolicy||this.referrerPolicy,b=n.transferCache??this.transferCache,S=n.timeout??this.timeout,I=n.body!==void 0?n.body:this.body,T=n.withCredentials??this.withCredentials,ve=n.reportProgress??this.reportProgress,at=n.headers||this.headers,Ke=n.params||this.params,Zi=n.context??this.context;return n.setHeaders!==void 0&&(at=Object.keys(n.setHeaders).reduce((Ki,xi)=>Ki.set(xi,n.setHeaders[xi]),at)),n.setParams&&(Ke=Object.keys(n.setParams).reduce((Ki,xi)=>Ki.set(xi,n.setParams[xi]),Ke)),new t(e,i,I,{params:Ke,headers:at,context:Zi,reportProgress:ve,responseType:r,withCredentials:T,transferCache:b,keepalive:o,cache:s,priority:a,timeout:S,mode:l,redirect:c,credentials:u,referrer:h,integrity:g,referrerPolicy:_})}},Hi=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Hi||{}),_a=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Zt,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},vl=class t extends _a{constructor(n={}){super(n)}type=Hi.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},va=class t extends _a{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Hi.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},si=class extends _a{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},rx=200,x1=204;var D1=/^\)\]\}',?\n/,ox=new y(""),Au=(()=>{class t{fetchImpl=d(Yg,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=d(U);destroyRef=d(Ot);handle(e){return new ie(i=>{let r=new AbortController;this.doRequest(e,r.signal,i).then(Zg,a=>i.error(new si({error:a})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}async doRequest(e,i,r){let o=this.createRequestInit(e),a;try{let S=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,C({signal:i},o)));E1(S),r.next({type:Hi.Sent}),a=await S}catch(S){r.error(new si({error:S,status:S.status??0,statusText:S.statusText,url:e.urlWithParams,headers:S.headers}));return}let s=new Zt(a.headers),l=a.statusText,c=a.url||e.urlWithParams,u=a.status,h=null;if(e.reportProgress&&r.next(new vl({headers:s,status:u,statusText:l,url:c})),a.body){let S=a.headers.get("content-length"),I=[],T=a.body.getReader(),ve=0,at,Ke,Zi=typeof Zone<"u"&&Zone.current,Ki=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await T.cancel(),Ki=!0;break}let{done:ms,value:Df}=await T.read();if(ms)break;if(I.push(Df),ve+=Df.length,e.reportProgress){Ke=e.responseType==="text"?(Ke??"")+(at??=new TextDecoder).decode(Df,{stream:!0}):void 0;let Zv=()=>r.next({type:Hi.DownloadProgress,total:S?+S:void 0,loaded:ve,partialText:Ke});Zi?Zi.run(Zv):Zv()}}}),Ki){r.complete();return}let xi=this.concatChunks(I,ve);try{let ms=a.headers.get(_l)??"";h=this.parseBody(e,xi,ms,u)}catch(ms){r.error(new si({error:ms,headers:new Zt(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=h?rx:0);let g=u>=200&&u<300,_=a.redirected,b=a.type;g?(r.next(new va({body:h,headers:s,status:u,statusText:l,url:c,redirected:_,responseType:b})),r.complete()):r.error(new si({error:h,headers:s,status:u,statusText:l,url:c,redirected:_,responseType:b}))}parseBody(e,i,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(i).replace(D1,"");if(a==="")return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case"text":return new TextDecoder().decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(e){let i={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>i[o]=a.join(",")),e.headers.has(Fu)||(i[Fu]=ix),!e.headers.has(_l)){let o=e.detectContentTypeHeader();o!==null&&(i[_l]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Yg=class{};function Zg(){}function E1(t){t.then(Zg,Zg)}var S1=/^\)\]\}',?\n/;var Kg=(()=>{class t{xhrFactory;tracingService=d(Pn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new k(-2800,!1);let i=this.xhrFactory;return W(null).pipe(it(()=>new ie(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((I,T)=>a.setRequestHeader(I,T.join(","))),e.headers.has(Fu)||a.setRequestHeader(Fu,ix),!e.headers.has(_l)){let I=e.detectContentTypeHeader();I!==null&&a.setRequestHeader(_l,I)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let I=e.responseType.toLowerCase();a.responseType=I!=="json"?I:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let I=a.statusText||"OK",T=new Zt(a.getAllResponseHeaders()),ve=a.responseURL||e.url;return l=new vl({headers:T,status:a.status,statusText:I,url:ve}),l},u=this.maybePropagateTrace(()=>{let{headers:I,status:T,statusText:ve,url:at}=c(),Ke=null;T!==x1&&(Ke=typeof a.response>"u"?a.responseText:a.response),T===0&&(T=Ke?rx:0);let Zi=T>=200&&T<300;if(e.responseType==="json"&&typeof Ke=="string"){let Ki=Ke;Ke=Ke.replace(S1,"");try{Ke=Ke!==""?JSON.parse(Ke):null}catch(xi){Ke=Ki,Zi&&(Zi=!1,Ke={error:xi,text:Ke})}}Zi?(o.next(new va({body:Ke,headers:I,status:T,statusText:ve,url:at||void 0})),o.complete()):o.error(new si({error:Ke,headers:I,status:T,statusText:ve,url:at||void 0}))}),h=this.maybePropagateTrace(I=>{let{url:T}=c(),ve=new si({error:I,status:a.status||0,statusText:a.statusText||"Unknown Error",url:T||void 0});o.error(ve)}),g=h;e.timeout&&(g=this.maybePropagateTrace(I=>{let{url:T}=c(),ve=new si({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:T||void 0});o.error(ve)}));let _=!1,b=this.maybePropagateTrace(I=>{_||(o.next(c()),_=!0);let T={type:Hi.DownloadProgress,loaded:I.loaded};I.lengthComputable&&(T.total=I.total),e.responseType==="text"&&a.responseText&&(T.partialText=a.responseText),o.next(T)}),S=this.maybePropagateTrace(I=>{let T={type:Hi.UploadProgress,loaded:I.loaded};I.lengthComputable&&(T.total=I.total),o.next(T)});return a.addEventListener("load",u),a.addEventListener("error",h),a.addEventListener("timeout",g),a.addEventListener("abort",h),e.reportProgress&&(a.addEventListener("progress",b),s!==null&&a.upload&&a.upload.addEventListener("progress",S)),a.send(s),o.next({type:Hi.Sent}),()=>{a.removeEventListener("error",h),a.removeEventListener("abort",h),a.removeEventListener("load",u),a.removeEventListener("timeout",g),e.reportProgress&&(a.removeEventListener("progress",b),s!==null&&a.upload&&a.upload.removeEventListener("progress",S)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(H(co))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ax(t,n){return n(t)}function I1(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function M1(t,n,e){return(i,r)=>vt(e,()=>n(i,o=>t(o,r)))}var Lu=new y(""),Vu=new y("",{factory:()=>[]}),sx=new y(""),Xg=new y("",{factory:()=>!0});function T1(){let t=null;return(n,e)=>{t===null&&(t=(d(Lu,{optional:!0})??[]).reduceRight(I1,ax));let i=d(na);if(d(Xg)){let o=i.add();return t(n,e).pipe(or(o))}else return t(n,e)}}var Bu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=H(Kg),r},providedIn:"root"})}return t})();var Pu=(()=>{class t{backend;injector;chain=null;pendingTasks=d(na);contributeToStability=d(Xg);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(Vu),...this.injector.get(sx,[])]));this.chain=i.reduceRight((r,o)=>M1(r,o,this.injector),ax)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(or(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(H(Bu),H(Be))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Jg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=H(Pu),r},providedIn:"root"})}return t})();function Qg(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Ct=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof ga)o=e;else{let l;r.headers instanceof Zt?l=r.headers:l=new Zt(r.headers);let c;r.params&&(r.params instanceof Ui?c=r.params:c=new Ui({fromObject:r.params})),o=new ga(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=W(o).pipe(Hr(l=>this.handler.handle(l)));if(e instanceof ga||r.observe==="events")return a;let s=a.pipe(Ne(l=>l instanceof va));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(ue(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new k(2806,!1);return l.body}));case"blob":return s.pipe(ue(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new k(2807,!1);return l.body}));case"text":return s.pipe(ue(l=>{if(l.body!==null&&typeof l.body!="string")throw new k(2808,!1);return l.body}));default:return s.pipe(ue(l=>l.body))}case"response":return s;default:throw new k(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Ui().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Qg(r,i))}post(e,i,r={}){return this.request("POST",e,Qg(r,i))}put(e,i,r={}){return this.request("PUT",e,Qg(r,i))}static \u0275fac=function(i){return new(i||t)(H(Jg))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var k1=new y("",{factory:()=>!0}),R1="XSRF-TOKEN",A1=new y("",{factory:()=>R1}),N1="X-XSRF-TOKEN",O1=new y("",{factory:()=>N1}),F1=(()=>{class t{cookieName=d(A1);doc=d(ee);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ml(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=H(F1),r},providedIn:"root"})}return t})();function P1(t,n){if(!d(k1)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=d(ha).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return n(t)}catch{return n(t)}let e=d(lx).getToken(),i=d(O1);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}var bl=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(bl||{});function e_(t,n){return{\u0275kind:t,\u0275providers:n}}function t_(...t){let n=[Ct,Pu,{provide:Jg,useExisting:Pu},{provide:Bu,useFactory:()=>d(ox,{optional:!0})??d(Kg)},{provide:Vu,useValue:P1,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return ki(n)}function n_(t){return e_(bl.Interceptors,t.map(n=>({provide:Vu,useValue:n,multi:!0})))}var ex=new y("");function i_(){return e_(bl.LegacyInterceptors,[{provide:ex,useFactory:T1},{provide:Vu,useExisting:ex,multi:!0}])}function r_(){return e_(bl.Fetch,[Au,{provide:ox,useExisting:Au},{provide:Bu,useExisting:Au}])}var dx=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=H(L1),r},providedIn:"root"})}return t})(),L1=(()=>{class t extends yl{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case ht.NONE:return i;case ht.HTML:return Vi(i,"HTML")?Fn(i):Jp(this._doc,String(i)).toString();case ht.STYLE:return Vi(i,"Style")?Fn(i):i;case ht.SCRIPT:if(Vi(i,"Script"))return Fn(i);throw new k(5200,!1);case ht.URL:return Vi(i,"URL")?Fn(i):tl(String(i));case ht.RESOURCE_URL:if(Vi(i,"ResourceURL"))return Fn(i);throw new k(5201,!1);default:throw new k(5202,!1)}}bypassSecurityTrustHtml(e){return Qp(e)}bypassSecurityTrustStyle(e){return Yp(e)}bypassSecurityTrustScript(e){return Zp(e)}bypassSecurityTrustUrl(e){return Kp(e)}bypassSecurityTrustResourceUrl(e){return Xp(e)}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fe="primary",Fl=Symbol("RouteTitle"),c_=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function mo(t){return new c_(t)}function o_(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function vx(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return o_(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!o_(o,t.slice(0,o.length),s)||!o_(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Wu(t){return new Promise((n,e)=>{t.pipe(Si()).subscribe({next:i=>n(i),error:i=>e(i)})})}function V1(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!li(t[e],n[e]))return!1;return!0}function li(t,n){let e=t?d_(t):void 0,i=n?d_(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!bx(t[r],n[r]))return!1;return!0}function d_(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function bx(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function B1(t){return t.length>0?t[t.length-1]:null}function po(t){return Vr(t)?t:_r(t)?$e(Promise.resolve(t)):W(t)}function yx(t){return Vr(t)?Wu(t):Promise.resolve(t)}var j1={exact:Cx,subset:xx},wx={exact:U1,subset:H1,ignored:()=>!0},D_={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Sl={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function E_(t,n,e){let i=t instanceof Ht?t:n.parseUrl(t);return wt(()=>u_(n.lastSuccessfulNavigation()?.finalUrl??new Ht,i,C(C({},Sl),e)))}function u_(t,n,e){return j1[e.paths](t.root,n.root,e.matrixParams)&&wx[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function U1(t,n){return li(t,n)}function Cx(t,n,e){if(!uo(t.segments,n.segments)||!Hu(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!Cx(t.children[i],n.children[i],e))return!1;return!0}function H1(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>bx(t[e],n[e]))}function xx(t,n,e){return Dx(t,n,n.segments,e)}function Dx(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!uo(r,e)||n.hasChildren()||!Hu(r,e,i))}else if(t.segments.length===e.length){if(!uo(t.segments,e)||!Hu(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!xx(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!uo(t.segments,r)||!Hu(t.segments,r,i)||!t.children[fe]?!1:Dx(t.children[fe],n,o,i)}}function Hu(t,n,e){return n.every((i,r)=>wx[e](t[r].parameters,i.parameters))}var Ht=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Fe([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=mo(this.queryParams),this._queryParamMap}toString(){return W1.serialize(this)}},Fe=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return zu(this)}},yr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=mo(this.parameters),this._parameterMap}toString(){return Sx(this)}};function z1(t,n){return uo(t,n)&&t.every((e,i)=>li(e.parameters,n[i].parameters))}function uo(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function $1(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===fe&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==fe&&(e=e.concat(n(r,i)))}),e}var Ia=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>new wr,providedIn:"root"})}return t})(),wr=class{parse(n){let e=new f_(n);return new Ht(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${wl(n.root,!0)}`,i=Q1(n.queryParams),r=typeof n.fragment=="string"?`#${G1(n.fragment)}`:"";return`${e}${i}${r}`}},W1=new wr;function zu(t){return t.segments.map(n=>Sx(n)).join("/")}function wl(t,n){if(!t.hasChildren())return zu(t);if(n){let e=t.children[fe]?wl(t.children[fe],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==fe&&i.push(`${r}:${wl(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=$1(t,(i,r)=>r===fe?[wl(t.children[fe],!1)]:[`${r}:${wl(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[fe]!=null?`${zu(t)}/${e[0]}`:`${zu(t)}/(${e.join("//")})`}}function Ex(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ju(t){return Ex(t).replace(/%3B/gi,";")}function G1(t){return encodeURI(t)}function m_(t){return Ex(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function $u(t){return decodeURIComponent(t)}function mx(t){return $u(t.replace(/\+/g,"%20"))}function Sx(t){return`${m_(t.path)}${q1(t.parameters)}`}function q1(t){return Object.entries(t).map(([n,e])=>`;${m_(n)}=${m_(e)}`).join("")}function Q1(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${ju(e)}=${ju(r)}`).join("&"):`${ju(e)}=${ju(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var Y1=/^[^\/()?;#]+/;function a_(t){let n=t.match(Y1);return n?n[0]:""}var Z1=/^[^\/()?;=#]+/;function K1(t){let n=t.match(Z1);return n?n[0]:""}var X1=/^[^=?&#]+/;function J1(t){let n=t.match(X1);return n?n[0]:""}var eN=/^[^&#]+/;function tN(t){let n=t.match(eN);return n?n[0]:""}var f_=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Fe([],{}):new Fe([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new k(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[fe]=new Fe(e,i)),r}parseSegment(){let n=a_(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new k(4009,!1);return this.capture(n),new yr($u(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=K1(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=a_(this.remaining);r&&(i=r,this.capture(i))}n[$u(e)]=$u(i)}parseQueryParam(n){let e=J1(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=tN(this.remaining);a&&(i=a,this.capture(i))}let r=mx(e),o=mx(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=a_(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new k(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=fe);let s=this.parseChildren(e+1);i[a??fe]=Object.keys(s).length===1&&s[fe]?s[fe]:new Fe([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new k(4011,!1)}};function Ix(t){return t.segments.length>0?new Fe([],{[fe]:t}):t}function Mx(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=Mx(r);if(i===fe&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Fe(t.segments,n);return nN(e)}function nN(t){if(t.numberOfChildren===1&&t.children[fe]){let n=t.children[fe];return new Fe(t.segments.concat(n.segments),n.children)}return t}function Cr(t){return t instanceof Ht}function Tx(t,n,e=null,i=null,r=new wr){let o=kx(t);return Rx(o,n,e,i,r)}function kx(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new Fe(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=Ix(i);return n??r}function Rx(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return s_(o,o,o,e,i,r);let a=iN(n);if(a.toRoot())return s_(o,o,new Fe([],{}),e,i,r);let s=rN(a,o,t),l=s.processChildren?xl(s.segmentGroup,s.index,a.commands):Nx(s.segmentGroup,s.index,a.commands);return s_(o,s.segmentGroup,l,e,i,r)}function Gu(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Il(t){return typeof t=="object"&&t!=null&&t.outlets}function fx(t,n,e){t||="\u0275";let i=new Ht;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function s_(t,n,e,i,r,o){let a={};for(let[c,u]of Object.entries(i??{}))a[c]=Array.isArray(u)?u.map(h=>fx(c,h,o)):fx(c,u,o);let s;t===n?s=e:s=Ax(t,n,e);let l=Ix(Mx(s));return new Ht(l,a,r)}function Ax(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=Ax(o,n,e)}),new Fe(t.segments,i)}var qu=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Gu(i[0]))throw new k(4003,!1);let r=i.find(Il);if(r&&r!==B1(i))throw new k(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function iN(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new qu(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new qu(e,n,i)}var ya=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function rN(t,n,e){if(t.isAbsolute)return new ya(n,!0,0);if(!e)return new ya(n,!1,NaN);if(e.parent===null)return new ya(e,!0,0);let i=Gu(t.commands[0])?0:1,r=e.segments.length-1+i;return oN(e,r,t.numberOfDoubleDots)}function oN(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new k(4005,!1);r=i.segments.length}return new ya(i,!1,r-o)}function aN(t){return Il(t[0])?t[0].outlets:{[fe]:t}}function Nx(t,n,e){if(t??=new Fe([],{}),t.segments.length===0&&t.hasChildren())return xl(t,n,e);let i=sN(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Fe(t.segments.slice(0,i.pathIndex),{});return o.children[fe]=new Fe(t.segments.slice(i.pathIndex),t.children),xl(o,0,r)}else return i.match&&r.length===0?new Fe(t.segments,{}):i.match&&!t.hasChildren()?h_(t,n,e):i.match?xl(t,0,r):h_(t,n,e)}function xl(t,n,e){if(e.length===0)return new Fe(t.segments,{});{let i=aN(e),r={};if(Object.keys(i).some(o=>o!==fe)&&t.children[fe]&&t.numberOfChildren===1&&t.children[fe].segments.length===0){let o=xl(t.children[fe],n,e);return new Fe(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Nx(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Fe(t.segments,r)}}function sN(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(Il(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!px(l,c,a))return o;i+=2}else{if(!px(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function h_(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Il(o)){let l=lN(o.outlets);return new Fe(i,l)}if(r===0&&Gu(e[0])){let l=t.segments[n];i.push(new yr(l.path,hx(e[0]))),r++;continue}let a=Il(o)?o.outlets[fe]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Gu(s)?(i.push(new yr(a,hx(s))),r+=2):(i.push(new yr(a,{})),r++)}return new Fe(i,{})}function lN(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=h_(new Fe([],{}),0,i))}),n}function hx(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function px(t,n,e){return t==e.path&&li(n,e.parameters)}var Dl="imperative",xt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(xt||{}),cn=class{id;url;constructor(n,e){this.id=n,this.url=e}},fo=class extends cn{type=xt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Un=class extends cn{urlAfterRedirects;type=xt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Pt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Pt||{}),Ml=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Ml||{}),yn=class extends cn{reason;code;type=xt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Ox(t){return t instanceof yn&&(t.code===Pt.Redirect||t.code===Pt.SupersededByNewNavigation)}var $i=class extends cn{reason;code;type=xt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},ho=class extends cn{error;target;type=xt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Tl=class extends cn{urlAfterRedirects;state;type=xt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qu=class extends cn{urlAfterRedirects;state;type=xt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yu=class extends cn{urlAfterRedirects;state;shouldActivate;type=xt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Zu=class extends cn{urlAfterRedirects;state;type=xt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ku=class extends cn{urlAfterRedirects;state;type=xt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xu=class{route;type=xt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ju=class{route;type=xt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},em=class{snapshot;type=xt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},tm=class{snapshot;type=xt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nm=class{snapshot;type=xt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},im=class{snapshot;type=xt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ca=class{},kl=class{},xa=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function cN(t){return!(t instanceof Ca)&&!(t instanceof xa)&&!(t instanceof kl)}var rm=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Ma(this.rootInjector)}},Ma=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new rm(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(H(Be))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),om=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=p_(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=p_(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=g_(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return g_(n,this._root).map(e=>e.value)}};function p_(t,n){if(t===n.value)return n;for(let e of n.children){let i=p_(t,e);if(i)return i}return null}function g_(t,n){if(t===n.value)return[n];for(let e of n.children){let i=g_(t,e);if(i.length)return i.unshift(n),i}return[]}var ln=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ba(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Rl=class extends om{snapshot;constructor(n,e){super(n),this.snapshot=e,I_(this,n)}toString(){return this.snapshot.toString()}};function Fx(t,n){let e=dN(t,n),i=new Xe([new yr("",{})]),r=new Xe({}),o=new Xe({}),a=new Xe({}),s=new Xe(""),l=new Wi(i,r,a,s,o,fe,t,e.root);return l.snapshot=e.root,new Rl(new ln(l,[]),e)}function dN(t,n){let e={},i={},r={},a=new Da([],e,r,"",i,fe,t,null,{},n);return new Al("",new ln(a,[]))}var Wi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(ue(c=>c[Fl]))??W(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ue(n=>mo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ue(n=>mo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function S_(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:C(C({},n.params),t.params),data:C(C({},n.data),t.data),resolve:C(C(C(C({},t.data),n.data),r?.data),t._resolvedData)}:i={params:C({},t.params),data:C({},t.data),resolve:C(C({},t.data),t._resolvedData??{})},r&&Lx(r)&&(i.resolve[Fl]=r.title),i}var Da=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Fl]}constructor(n,e,i,r,o,a,s,l,c,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=mo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=mo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Al=class extends om{url;constructor(n,e){super(e),this.url=n,I_(this,e)}toString(){return Px(this._root)}};function I_(t,n){n.value._routerState=t,n.children.forEach(e=>I_(t,e))}function Px(t){let n=t.children.length>0?` { ${t.children.map(Px).join(", ")} } `:"";return`${t.value}${n}`}function l_(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,li(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),li(n.params,e.params)||t.paramsSubject.next(e.params),V1(n.url,e.url)||t.urlSubject.next(e.url),li(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function __(t,n){let e=li(t.params,n.params)&&z1(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||__(t.parent,n.parent))}function Lx(t){return typeof t.title=="string"||t.title===null}var Vx=new y(""),Pl=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=fe;activateEvents=new j;deactivateEvents=new j;attachEvents=new j;detachEvents=new j;routerOutletData=NC();parentContexts=d(Ma);location=d(tt);changeDetector=d(Qe);inputBinder=d(cm,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new k(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new k(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new k(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new k(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new v_(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ue]})}return t})(),v_=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Wi?this.route:n===Ma?this.childContexts:n===Vx?this.outletData:this.parent.get(n,e)}},cm=new y("");var M_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&ne(0,"router-outlet")},dependencies:[Pl],encapsulation:2})}return t})();function T_(t){let n=t.children&&t.children.map(T_),e=n?te(C({},t),{children:n}):C({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==fe&&(e.component=M_),e}function uN(t,n,e){let i=Nl(t,n._root,e?e._root:void 0);return new Rl(i,n)}function Nl(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=mN(t,n,e);return new ln(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Nl(t,s)),a}}let i=fN(n.value),r=n.children.map(o=>Nl(t,o));return new ln(i,r)}}function mN(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Nl(t,i,r);return Nl(t,i)})}function fN(t){return new Wi(new Xe(t.url),new Xe(t.params),new Xe(t.queryParams),new Xe(t.fragment),new Xe(t.data),t.outlet,t.component,t)}var Ea=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Bx="ngNavigationCancelingError";function am(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Cr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=jx(!1,Pt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function jx(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Bx]=!0,e.cancellationCode=n,e}function hN(t){return Ux(t)&&Cr(t.url)}function Ux(t){return!!t&&t[Bx]}var b_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),l_(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=ba(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ba(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ba(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=ba(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new im(o.value.snapshot))}),n.children.length&&this.forwardEvent(new tm(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(l_(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),l_(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},sm=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},wa=class{component;route;constructor(n,e){this.component=n,this.route=e}};function pN(t,n,e){let i=t._root,r=n?n._root:null;return Cl(i,r,e,[i.value])}function gN(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Ta(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!lh(t)?t:n.get(t):i}function Cl(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ba(n);return t.children.forEach(a=>{_N(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>El(s,e.getContext(a),r)),r}function _N(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=vN(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new sm(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Cl(t,n,s?s.children:null,i,r):Cl(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new wa(s.outlet.component,a))}else a&&El(n,s,r),r.canActivateChecks.push(new sm(i)),o.component?Cl(t,null,s?s.children:null,i,r):Cl(t,null,e,i,r);return r}function vN(t,n,e){if(typeof e=="function")return vt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!uo(t.url,n.url);case"pathParamsOrQueryParamsChange":return!uo(t.url,n.url)||!li(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!__(t,n)||!li(t.queryParams,n.queryParams);default:return!__(t,n)}}function El(t,n,e){let i=ba(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?El(a,n.children.getContext(o),e):El(a,null,e):El(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new wa(n.outlet.component,r)):e.canDeactivateChecks.push(new wa(null,r)):e.canDeactivateChecks.push(new wa(null,r))}function Ll(t){return typeof t=="function"}function bN(t){return typeof t=="boolean"}function yN(t){return t&&Ll(t.canLoad)}function wN(t){return t&&Ll(t.canActivate)}function CN(t){return t&&Ll(t.canActivateChild)}function xN(t){return t&&Ll(t.canDeactivate)}function DN(t){return t&&Ll(t.canMatch)}function Hx(t){return t instanceof Br||t?.name==="EmptyError"}var Uu=Symbol("INITIAL_VALUE");function Sa(){return it(t=>jr(t.map(n=>n.pipe(Jt(1),Et(Uu)))).pipe(ue(n=>{for(let e of n)if(e!==!0){if(e===Uu)return Uu;if(e===!1||EN(e))return e}return!0}),Ne(n=>n!==Uu),Jt(1)))}function EN(t){return Cr(t)||t instanceof Ea}function zx(t){return t.aborted?W(void 0).pipe(Jt(1)):new ie(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function $x(t){return we(zx(t))}function SN(t){return Rt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?W(te(C({},n),{guardsResult:!0})):IN(o,e,i).pipe(Rt(a=>a&&bN(a)?MN(e,r,t):W(a)),ue(a=>te(C({},n),{guardsResult:a})))})}function IN(t,n,e){return $e(t).pipe(Rt(i=>NN(i.component,i.route,e,n)),Si(i=>i!==!0,!0))}function MN(t,n,e){return $e(n).pipe(Hr(i=>Uo(kN(i.route.parent,e),TN(i.route,e),AN(t,i.path),RN(t,i.route))),Si(i=>i!==!0,!0))}function TN(t,n){return t!==null&&n&&n(new nm(t)),W(!0)}function kN(t,n){return t!==null&&n&&n(new em(t)),W(!0)}function RN(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return W(!0);let i=e.map(r=>Ur(()=>{let o=n._environmentInjector,a=Ta(r,o),s=wN(a)?a.canActivate(n,t):vt(o,()=>a(n,t));return po(s).pipe(Si())}));return W(i).pipe(Sa())}function AN(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>gN(o)).filter(o=>o!==null).map(o=>Ur(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=Ta(s,l),u=CN(c)?c.canActivateChild(e,t):vt(l,()=>c(e,t));return po(u).pipe(Si())});return W(a).pipe(Sa())}));return W(r).pipe(Sa())}function NN(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return W(!0);let o=r.map(a=>{let s=n._environmentInjector,l=Ta(a,s),c=xN(l)?l.canDeactivate(t,n,e,i):vt(s,()=>l(t,n,e,i));return po(c).pipe(Si())});return W(o).pipe(Sa())}function ON(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return W(!0);let a=o.map(s=>{let l=Ta(s,t),c=yN(l)?l.canLoad(n,e):vt(t,()=>l(n,e)),u=po(c);return r?u.pipe($x(r)):u});return W(a).pipe(Sa(),Wx(i))}function Wx(t){return Vf(Ve(n=>{if(typeof n!="boolean")throw am(t,n)}),ue(n=>n===!0))}function FN(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return W(!0);let s=a.map(l=>{let c=Ta(l,t),u=DN(c)?c.canMatch(n,e,r):vt(t,()=>c(n,e,r));return po(u).pipe($x(o))});return W(s).pipe(Sa(),Wx(i))}var zi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Ol=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function PN(t){throw new k(4e3,!1)}function LN(t){throw jx(!1,Pt.GuardRejected)}var y_=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[fe])throw PN(`${n.redirectTo}`);r=r.children[fe]}}async applyRedirectCommands(n,e,i,r,o){let a=await VN(e,r,o);if(a instanceof Ht)throw new Ol(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Ol(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Ht(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new Fe(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new k(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function VN(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Wu(po(vt(e,()=>i(n))))}function BN(t,n){return t.providers&&!t._injector&&(t._injector=sl(t.providers,n,`Route: ${t.path}`)),t._injector??n}function jn(t){return t.outlet||fe}function jN(t,n){let e=t.filter(i=>jn(i)===n);return e.push(...t.filter(i=>jn(i)!==n)),e}var w_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Gx(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function UN(t,n,e,i,r,o,a){let s=qx(t,n,e);if(!s.matched)return W(s);let l=Gx(o(s));return i=BN(n,i),FN(i,n,e,r,l,a).pipe(ue(c=>c===!0?s:C({},w_)))}function qx(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?C({},w_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||vx)(e,t,n);if(!r)return C({},w_);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?C(C({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function gx(t,n,e,i,r){return e.length>0&&$N(t,e,i,r)?{segmentGroup:new Fe(n,zN(i,new Fe(e,t.children))),slicedSegments:[]}:e.length===0&&WN(t,e,i)?{segmentGroup:new Fe(t.segments,HN(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Fe(t.segments,t.children),slicedSegments:e}}function HN(t,n,e,i){let r={};for(let o of e)if(dm(t,n,o)&&!i[jn(o)]){let a=new Fe([],{});r[jn(o)]=a}return C(C({},i),r)}function zN(t,n){let e={};e[fe]=n;for(let i of t)if(i.path===""&&jn(i)!==fe){let r=new Fe([],{});e[jn(i)]=r}return e}function $N(t,n,e,i){return e.some(r=>!dm(t,n,r)||!(jn(r)!==fe)?!1:!(i!==void 0&&jn(r)===i))}function WN(t,n,e){return e.some(i=>dm(t,n,i))}function dm(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function GN(t,n,e){return n.length===0&&!t.children[e]}var C_=class{};async function qN(t,n,e,i,r,o,a="emptyOnly",s){return new x_(t,n,e,i,r,a,o,s).recognize()}var QN=31,x_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new y_(this.urlSerializer,this.urlTree)}noMatchError(n){return new k(4002,`'${n.segmentGroup}'`)}async recognize(){let n=gx(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new ln(i,e),o=new Al("",r),a=Tx(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Da([],Object.freeze({}),Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),fe,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,fe,e),rootSnapshot:e}}catch(i){if(i instanceof Ol)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof zi?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof ln?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],u=jN(e,l),h=await this.processSegmentGroup(n,u,c,l,r);a.push(...h)}let s=Qx(a);return YN(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof zi||Hx(c))continue;throw c}if(GN(i,r,o))return new C_;throw new zi(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(jn(i)!==a&&(a===fe||!dm(r,o,i)))throw new zi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new zi(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:h,remainingSegments:g}=qx(e,r,o);if(!l)throw new zi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>QN&&(this.allowRedirects=!1));let _=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let b=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,Gx(_),n),S=await this.applyRedirects.lineralizeSegments(r,b);return this.processSegment(n,i,e,S.concat(g),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new Da(i,r,Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,KN(e),jn(e),e.component??e._loadedComponent??null,e,XN(e),n),s=S_(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=at=>this.createSnapshot(n,i,at.consumedSegments,at.parameters,a),l=await Wu(UN(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new zi(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:h,consumedSegments:g,remainingSegments:_}=l,b=this.createSnapshot(n,i,g,h,a),{segmentGroup:S,slicedSegments:I}=gx(e,g,_,c,o);if(I.length===0&&S.hasChildren()){let at=await this.processChildren(u,c,S,b);return new ln(b,at)}if(c.length===0&&I.length===0)return new ln(b,[]);let T=jn(i)===o,ve=await this.processSegment(u,c,S,I,T?fe:o,!0,b);return new ln(b,ve instanceof ln?[ve]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Wu(ON(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw LN(e)}return{routes:[],injector:n}}};function YN(t){t.sort((n,e)=>n.value.outlet===fe?-1:e.value.outlet===fe?1:n.value.outlet.localeCompare(e.value.outlet))}function ZN(t){let n=t.value.routeConfig;return n&&n.path===""}function Qx(t){let n=[],e=new Set;for(let i of t){if(!ZN(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=Qx(i.children);n.push(new ln(i.value,r))}return n.filter(i=>!e.has(i))}function KN(t){return t.data||{}}function XN(t){return t.resolve||{}}function JN(t,n,e,i,r,o,a){return Rt(async s=>{let{state:l,tree:c}=await qN(t,n,e,i,s.extractedUrl,r,o,a);return te(C({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function eO(t){return Rt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return W(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of Yx(s))o.add(l);let a=0;return $e(o).pipe(Hr(s=>r.has(s)?tO(s,e,t):(s.data=S_(s,s.parent,t).resolve,W(void 0))),Ve(()=>a++),Jc(1),Rt(s=>a===o.size?W(n):Ye))})}function Yx(t){let n=t.children.map(e=>Yx(e)).flat();return[t,...n]}function tO(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!Lx(i)&&(r[Fl]=i.title),Ur(()=>(t.data=S_(t,t.parent,e).resolve,nO(r,t,n).pipe(ue(o=>(t._resolvedData=o,t.data=C(C({},t.data),o),null)))))}function nO(t,n,e){let i=d_(t);if(i.length===0)return W({});let r={};return $e(i).pipe(Rt(o=>iO(t[o],n,e).pipe(Si(),Ve(a=>{if(a instanceof Ea)throw am(new wr,a);r[o]=a}))),Jc(1),ue(()=>r),ut(o=>Hx(o)?Ye:xs(o)))}function iO(t,n,e){let i=n._environmentInjector,r=Ta(t,i),o=r.resolve?r.resolve(n,e):vt(i,()=>r(n,e));return po(o)}function _x(t){return it(n=>{let e=t(n);return e?$e(e).pipe(ue(()=>n)):W(n)})}var k_=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===fe);return i}getResolvedTitleForRoute(e){return e.data[Fl]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(Zx),providedIn:"root"})}return t})(),Zx=(()=>{class t extends k_{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(H(dx))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ka=new y("",{factory:()=>({})}),Vl=new y(""),Kx=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(Mg);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await yx(vt(e,()=>i.loadComponent())),a=await eD(Jx(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await Xx(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function Xx(t,n,e,i){let r=await yx(vt(e,()=>t.loadChildren())),o=await eD(Jx(r)),a;o instanceof mu||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,u;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,u=a,l=s.get(Vl,[],{optional:!0,self:!0}).flat()),{routes:l.map(T_),injector:s,factory:u}}function rO(t){return t&&typeof t=="object"&&"default"in t}function Jx(t){return rO(t)?t.default:t}async function eD(t){return t}var um=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(oO),providedIn:"root"})}return t})(),oO=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),tD=new y("");var aO=()=>{},nD=new y(""),iD=(()=>{class t{currentNavigation=D(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=D(null);events=new M;transitionAbortWithErrorSubject=new M;configLoader=d(Kx);environmentInjector=d(Be);destroyRef=d(Ot);urlSerializer=d(Ia);rootContexts=d(Ma);location=d(br);inputBindingEnabled=d(cm,{optional:!0})!==null;titleStrategy=d(k_);options=d(ka,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(um);createViewTransition=d(tD,{optional:!0});navigationErrorHandler=d(nD,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>W(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Xu(r)),i=r=>this.events.next(new Ju(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Re(()=>{this.transitions?.next(te(C({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Xe(null),this.transitions.pipe(Ne(i=>i!==null),it(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return W(i).pipe(it(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Pt.SupersededByNewNavigation),Ye;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?te(C({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload")return this.events.next(new $i(s.id,this.urlSerializer.serialize(s.rawUrl),"",Ml.IgnoredSameUrlNavigation)),s.resolve(!1),Ye;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return W(s).pipe(it(h=>(this.events.next(new fo(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?Ye:Promise.resolve(h))),JN(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Ve(h=>{i.targetSnapshot=h.targetSnapshot,i.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(g=>(g.finalUrl=h.urlAfterRedirects,g)),this.events.next(new kl)}),it(h=>$e(i.routesRecognizeHandler.deferredHandle??W(void 0)).pipe(ue(()=>h))),Ve(()=>{let h=new Tl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:h,extractedUrl:g,source:_,restoredState:b,extras:S}=s,I=new fo(h,this.urlSerializer.serialize(g),_,b);this.events.next(I);let T=Fx(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=te(C({},s),{targetSnapshot:T,urlAfterRedirects:g,extras:te(C({},S),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ve=>(ve.finalUrl=g,ve)),W(i)}else return this.events.next(new $i(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Ml.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ye}),ue(s=>{let l=new Qu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=te(C({},s),{guards:pN(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),SN(s=>this.events.next(s)),it(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw am(this.urlSerializer,s.guardsResult);let l=new Yu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return Ye;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Pt.GuardRejected),Ye;if(s.guards.canActivateChecks.length===0)return W(s);let c=new Zu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return Ye;let u=!1;return W(s).pipe(eO(this.paramsInheritanceStrategy),Ve({next:()=>{u=!0;let h=new Ku(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)},complete:()=>{u||this.cancelNavigationTransition(s,"",Pt.NoDataFromResolver)}}))}),_x(s=>{let l=u=>{let h=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let g=u._environmentInjector;h.push(this.configLoader.loadComponent(g,u.routeConfig).then(_=>{u.component=_}))}for(let g of u.children)h.push(...l(g));return h},c=l(s.targetSnapshot.root);return c.length===0?W(s):$e(Promise.all(c).then(()=>s))}),_x(()=>this.afterPreactivation()),it(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?$e(c).pipe(ue(()=>i)):W(i)}),Jt(1),it(s=>{let l=uN(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=te(C({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new Ca);let c=i.beforeActivateHandler.deferredHandle;return c?$e(c.then(()=>s)):W(s)}),Ve(s=>{new b_(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=aO,l)),this.lastSuccessfulNavigation.set(Re(this.currentNavigation)),this.events.next(new Un(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),we(zx(o.signal).pipe(Ne(()=>!r&&!i.targetRouterState),Ve(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Pt.Aborted)}))),Ve({complete:()=>{r=!0}}),we(this.transitionAbortWithErrorSubject.pipe(Ve(s=>{throw s}))),or(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Pt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ut(s=>{if(r=!0,this.destroyed)return i.resolve(!1),Ye;if(Ux(s))this.events.next(new yn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),hN(s)?this.events.next(new xa(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new ho(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=vt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof Ea){let{message:u,cancellationCode:h}=am(this.urlSerializer,c);this.events.next(new yn(i.id,this.urlSerializer.serialize(i.extractedUrl),u,h)),this.events.next(new xa(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return Ye}))}))}cancelNavigationTransition(e,i,r){let o=new yn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Re(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function sO(t){return t!==Dl}var rD=new y("");var oD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(lO),providedIn:"root"})}return t})(),lm=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},lO=(()=>{class t extends lm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),mm=(()=>{class t{urlSerializer=d(Ia);options=d(ka,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(br);urlHandlingStrategy=d(um);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ht;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof Ht?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=Fx(null,d(Be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:()=>d(cO),providedIn:"root"})}return t})(),cO=(()=>{class t extends mm{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof fo?this.updateStateMemento():e instanceof $i?this.commitTransition(i):e instanceof Tl?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ca?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof yn&&!Ox(e)?this.restoreHistory(i):e instanceof ho?this.restoreHistory(i,!0):e instanceof Un&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=C(C({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=C(C({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?C({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):C({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function R_(t,n){t.events.pipe(Ne(e=>e instanceof Un||e instanceof yn||e instanceof ho||e instanceof $i),ue(e=>e instanceof Un||e instanceof $i?0:(e instanceof yn?e.code===Pt.Redirect||e.code===Pt.SupersededByNewNavigation:!1)?2:1),Ne(e=>e!==2),Jt(1)).subscribe(()=>{n()})}var dn=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(hu);stateManager=d(mm);options=d(ka,{optional:!0})||{};pendingTasks=d(Fi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(iD);urlSerializer=d(Ia);location=d(br);urlHandlingStrategy=d(um);injector=d(Be);_events=new M;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(oD);injectorCleanup=d(rD,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Vl,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(cm,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new oe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Re(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof yn&&i.code!==Pt.Redirect&&i.code!==Pt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Un)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof xa){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=C({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||sO(r.source)},a);this.scheduleNavigation(s,Dl,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}cN(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Dl,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=te(C({},o),{browserUrl:e})),r){let c=C({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(c=>{this.disposed||this.injector.get(rn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Re(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(T_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=C(C({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let g=r?r.snapshot:this.routerState.snapshot.root;h=kx(g)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return Rx(h,e,u,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Cr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Dl,null,i)}navigate(e,i={skipLocationChange:!1}){return dO(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Mi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=C({},D_):i===!1?r=C({},Sl):r=C(C({},Sl),i),Cr(e))return u_(this.currentUrlTree,e,r);let o=this.parseUrl(e);return u_(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((h,g)=>{s=h,l=g});let u=this.pendingTasks.add();return R_(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function dO(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new k(4008,!1)}var mO=(()=>{class t{router=d(dn);stateManager=d(mm);fragment=D("");queryParams=D({});path=D("");serializer=d(Ia);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Un&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Ht(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ci=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new Bn("href"),{optional:!0});reactiveHref=Tg(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Re(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Re(this._target)}_target=D(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Re(this._queryParams)}_queryParams=D(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Re(this._fragment)}_fragment=D(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Re(this._queryParamsHandling)}_queryParamsHandling=D(void 0);set state(e){this._state.set(e)}get state(){return Re(this._state)}_state=D(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Re(this._info)}_info=D(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Re(this._relativeTo)}_relativeTo=D(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Re(this._preserveFragment)}_preserveFragment=D(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Re(this._skipLocationChange)}_skipLocationChange=D(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Re(this._replaceUrl)}_replaceUrl=D(!1);isAnchorElement;onChanges=new M;applicationErrorHandler=d(rn);options=d(ka,{optional:!0});reactiveRouterState=d(mO);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=D(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Cr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=wt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Cr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return Re(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(ye(dn),ye(Wi),Js("tabindex"),ye(ze),ye(O),ye(pa))};static \u0275dir=E({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&R("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&me("href",r.reactiveHref(),eg)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",L],skipLocationChange:[2,"skipLocationChange","skipLocationChange",L],replaceUrl:[2,"replaceUrl","replaceUrl",L],routerLink:"routerLink"},features:[Ue]})}return t})(),A_=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new j;link=d(ci,{optional:!0});constructor(e,i,r,o){this.router=e,this.element=i,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof Un&&this.update()})}ngAfterContentInit(){W(this.links.changes,W(null)).pipe(rr()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=$e(e).pipe(rr()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(e){let i=Array.isArray(e)?e:e.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(i=>{e?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let i=fO(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?C({},D_):C({},Sl);return r=>{let o=r.urlTree;return o?Re(E_(o,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(i){return new(i||t)(ye(dn),ye(O),ye(ze),ye(Qe))};static \u0275dir=E({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,o){if(i&1&&Ze(o,ci,5),i&2){let a;A(a=N())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Ue]})}return t})();function fO(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var hO=new y("");function N_(t,...n){return ki([{provide:Vl,multi:!0,useValue:t},[],{provide:Wi,useFactory:pO},{provide:pu,multi:!0,useFactory:gO},n.map(e=>e.\u0275providers)])}function pO(){return d(dn).routerState.root}function gO(){let t=d(ce);return n=>{let e=t.get(on);if(n!==e.components[0])return;let i=t.get(dn),r=t.get(_O);t.get(vO)===1&&i.initialNavigation(),t.get(bO,null,{optional:!0})?.setUpPreloading(),t.get(hO,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var _O=new y("",{factory:()=>new M}),vO=new y("",{factory:()=>1});var bO=new y("");var fm="AuthToken",O_="AuthUsername",F_="AuthAuthorities",P_="AuthResetRequired",Dt=class t{roles=[];isBrowser;constructor(n){this.isBrowser=ai(n)}signOut(){this.isBrowser&&window.sessionStorage.clear()}saveToken(n){this.isBrowser&&(window.sessionStorage.removeItem(fm),window.sessionStorage.setItem(fm,n))}getToken(){return this.isBrowser&&sessionStorage.getItem(fm)||"{}"}saveUsername(n){this.isBrowser&&(window.sessionStorage.removeItem(O_),window.sessionStorage.setItem(O_,n))}getUsername(){return this.isBrowser&&sessionStorage.getItem(O_)||"{}"}saveAuthorities(n){this.isBrowser&&(window.sessionStorage.removeItem(F_),window.sessionStorage.setItem(F_,JSON.stringify(n)))}getAuthorities(){return this.roles=[],this.isBrowser&&sessionStorage.getItem(fm)&&JSON.parse(sessionStorage.getItem(F_)||"{}").forEach(n=>{this.roles.push(n.authority)}),this.roles}saveResetRequired(n){this.isBrowser&&(window.sessionStorage.removeItem(P_),window.sessionStorage.setItem(P_,JSON.stringify(n)))}getResetRequired(){return this.isBrowser?JSON.parse(sessionStorage.getItem(P_)||"false"):!1}static \u0275fac=function(e){return new(e||t)(H(jt))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var Bl=class t{tokenStorageService=d(Dt);router=d(dn);canActivate(n,e){for(let i=0;i<n.data.roles.length;i++)for(let r=0;r<this.tokenStorageService.getAuthorities().length;r++)if(n.data.roles[i]===this.tokenStorageService.getAuthorities()[r])return!0;return this.router.navigateByUrl("").then(),!1}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var xr=class t{userUrl="http://localhost:8080/exampleSecurity/user";adminUrl="http://localhost:8080/exampleSecurity/admin";modUrl="http://localhost:8080/exampleSecurity/mod";http=d(Ct);getUserPage(){return this.http.get(this.userUrl,{responseType:"text"})}getAdminPage(){return this.http.get(this.adminUrl,{responseType:"text"})}getModPage(){return this.http.get(this.modUrl,{responseType:"text"})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var fD=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(ye(ze),ye(O))};static \u0275dir=E({type:t})}return t})(),hD=(()=>{class t extends fD{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,features:[X]})}return t})(),V_=new y("");var yO={provide:V_,useExisting:It(()=>wn),multi:!0};function wO(){let t=bn()?bn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var CO=new y(""),wn=(()=>{class t extends fD{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!wO())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(ye(ze),ye(O),ye(CO,8))};static \u0275dir=E({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&R("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[pe([yO]),X]})}return t})();function B_(t){return t==null||j_(t)===0}function j_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var go=new y(""),U_=new y(""),xO=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Na=class{static min(n){return pD(n)}static max(n){return gD(n)}static required(n){return _D(n)}static requiredTrue(n){return DO(n)}static email(n){return EO(n)}static minLength(n){return vD(n)}static maxLength(n){return SO(n)}static pattern(n){return IO(n)}static nullValidator(n){return pm()}static compose(n){return DD(n)}static composeAsync(n){return ED(n)}};function pD(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function gD(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function _D(t){return B_(t.value)?{required:!0}:null}function DO(t){return t.value===!0?null:{required:!0}}function EO(t){return B_(t.value)||xO.test(t.value)?null:{email:!0}}function vD(t){return n=>{let e=n.value?.length??j_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function SO(t){return n=>{let e=n.value?.length??j_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function IO(t){if(!t)return pm;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(B_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function pm(t){return null}function bD(t){return t!=null}function yD(t){return _r(t)?$e(t):t}function wD(t){let n={};return t.forEach(e=>{n=e!=null?C(C({},n),e):n}),Object.keys(n).length===0?null:n}function CD(t,n){return n.map(e=>e(t))}function MO(t){return!t.validate}function xD(t){return t.map(n=>MO(n)?n:e=>n.validate(e))}function DD(t){if(!t)return null;let n=t.filter(bD);return n.length==0?null:function(e){return wD(CD(e,n))}}function H_(t){return t!=null?DD(xD(t)):null}function ED(t){if(!t)return null;let n=t.filter(bD);return n.length==0?null:function(e){let i=CD(e,n).map(yD);return Ds(i).pipe(ue(wD))}}function z_(t){return t!=null?ED(xD(t)):null}function aD(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function SD(t){return t._rawValidators}function ID(t){return t._rawAsyncValidators}function L_(t){return t?Array.isArray(t)?t:[t]:[]}function gm(t,n){return Array.isArray(t)?t.includes(n):t===n}function sD(t,n){let e=L_(n);return L_(t).forEach(r=>{gm(e,r)||e.push(r)}),e}function lD(t,n){return L_(n).filter(e=>!gm(t,e))}var _m=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=H_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=z_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Dr=class extends _m{name;get formDirective(){return null}get path(){return null}},Gi=class extends _m{_parent=null;name=null;valueAccessor=null},vm=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var di=(()=>{class t extends vm{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(ye(Gi,2))};static \u0275dir=E({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&$("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[X]})}return t})(),Im=(()=>{class t extends vm{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(ye(Dr,10))};static \u0275dir=E({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&$("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[X]})}return t})();var jl="VALID",hm="INVALID",Ra="PENDING",Ul="DISABLED",Er=class{},bm=class extends Er{value;source;constructor(n,e){super(),this.value=n,this.source=e}},zl=class extends Er{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},$l=class extends Er{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Aa=class extends Er{status;source;constructor(n,e){super(),this.status=n,this.source=e}},ym=class extends Er{source;constructor(n){super(),this.source=n}},wm=class extends Er{source;constructor(n){super(),this.source=n}};function MD(t){return(Mm(t)?t.validators:t)||null}function TO(t){return Array.isArray(t)?H_(t):t||null}function TD(t,n){return(Mm(n)?n.asyncValidators:t)||null}function kO(t){return Array.isArray(t)?z_(t):t||null}function Mm(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function RO(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new k(1e3,"");if(!i[e])throw new k(1001,"")}function AO(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new k(-1002,"")})}var Cm=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Re(this.statusReactive)}set status(n){Re(()=>this.statusReactive.set(n))}_status=wt(()=>this.statusReactive());statusReactive=D(void 0);get valid(){return this.status===jl}get invalid(){return this.status===hm}get pending(){return this.status===Ra}get disabled(){return this.status===Ul}get enabled(){return this.status!==Ul}errors;get pristine(){return Re(this.pristineReactive)}set pristine(n){Re(()=>this.pristineReactive.set(n))}_pristine=wt(()=>this.pristineReactive());pristineReactive=D(!0);get dirty(){return!this.pristine}get touched(){return Re(this.touchedReactive)}set touched(n){Re(()=>this.touchedReactive.set(n))}_touched=wt(()=>this.touchedReactive());touchedReactive=D(!1);get untouched(){return!this.touched}_events=new M;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(sD(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(sD(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(lD(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(lD(n,this._rawAsyncValidators))}hasValidator(n){return gm(this._rawValidators,n)}hasAsyncValidator(n){return gm(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(te(C({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new $l(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new $l(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(te(C({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new zl(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new zl(!0,i))}markAsPending(n={}){this.status=Ra;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Aa(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(te(C({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ul,this.errors=null,this._forEachChild(r=>{r.disable(te(C({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new bm(this.value,i)),this._events.next(new Aa(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(te(C({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=jl,this._forEachChild(i=>{i.enable(te(C({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(te(C({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===jl||this.status===Ra)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new bm(this.value,e)),this._events.next(new Aa(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(te(C({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ul:jl}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ra,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=yD(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Aa(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new j,this.statusChanges=new j}_calculateStatus(){return this._allControlsDisabled()?Ul:this.errors?hm:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ra)?Ra:this._anyControlsHaveStatus(hm)?hm:jl}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new zl(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new $l(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Mm(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=TO(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=kO(this._rawAsyncValidators)}},xm=class extends Cm{constructor(n,e,i){super(MD(e),TD(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){AO(this,!0,n),Object.keys(n).forEach(i=>{RO(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,te(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new wm(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Tm=new y("",{factory:()=>$_}),$_="always";function NO(t,n){return[...n.path,t]}function Dm(t,n,e=$_){W_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),FO(t,n),LO(t,n),PO(t,n),OO(t,n)}function cD(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Sm(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Em(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function OO(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function W_(t,n){let e=SD(t);n.validator!==null?t.setValidators(aD(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=ID(t);n.asyncValidator!==null?t.setAsyncValidators(aD(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Em(n._rawValidators,r),Em(n._rawAsyncValidators,r)}function Sm(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=SD(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=ID(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Em(n._rawValidators,i),Em(n._rawAsyncValidators,i),e}function FO(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&kD(t,n)})}function PO(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&kD(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function kD(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function LO(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function RD(t,n){t==null,W_(t,n)}function VO(t,n){return Sm(t,n)}function BO(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function jO(t){return Object.getPrototypeOf(t.constructor)===hD}function AD(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function UO(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===wn?e=o:jO(o)?i=o:r=o}),r||i||e||null}function HO(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var zO={provide:Dr,useExisting:It(()=>qi)},Hl=Promise.resolve(),qi=(()=>{class t extends Dr{callSetDisabledState;get submitted(){return Re(this.submittedReactive)}_submitted=wt(()=>this.submittedReactive());submittedReactive=D(!1);_directives=new Set;form;ngSubmit=new j;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new xm({},H_(e),z_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Hl.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Dm(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Hl.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Hl.then(()=>{let i=this._findContainer(e.path),r=new xm({});RD(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Hl.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Hl.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),AD(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new ym(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(ye(go,10),ye(U_,10),ye(Tm,8))};static \u0275dir=E({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&R("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pe([zO]),X]})}return t})();function dD(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function uD(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ND=class extends Cm{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(MD(e),TD(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Mm(e)&&(e.nonNullable||e.initialValueIsDefault)&&(uD(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new wm(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){dD(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){dD(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){uD(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var $O=t=>t instanceof ND;var WO={provide:Gi,useExisting:It(()=>Hn)},mD=Promise.resolve(),Hn=(()=>{class t extends Gi{_changeDetectorRef;callSetDisabledState;control=new ND;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new j;constructor(e,i,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=UO(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),BO(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Dm(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){mD.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&L(i);mD.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?NO(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(ye(Dr,9),ye(go,10),ye(U_,10),ye(V_,10),ye(Qe,8),ye(Tm,8))};static \u0275dir=E({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[pe([WO]),X,Ue]})}return t})();var km=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),GO={provide:V_,useExisting:It(()=>_o),multi:!0},_o=(()=>{class t extends hD{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&R("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[pe([GO]),X]})}return t})();var qO=(()=>{class t extends Dr{callSetDisabledState;get submitted(){return Re(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=wt(()=>this._submittedReactive());_submittedReactive=D(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Sm(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Dm(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){cD(e.control||null,e,!1),HO(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,AD(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ym(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(cD(i||null,e),$O(r)&&(Dm(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);RD(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&VO(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){W_(this.form,this),this._oldForm&&Sm(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(ye(go,10),ye(U_,10),ye(Tm,8))};static \u0275dir=E({type:t,features:[X,Ue]})}return t})();var QO={provide:Dr,useExisting:It(()=>Wl)},Wl=(()=>{class t extends qO{form=null;ngSubmit=new j;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&R("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pe([QO]),X]})}return t})();function YO(t){return typeof t=="number"?t:parseInt(t,10)}function OD(t){return typeof t=="number"?t:parseFloat(t)}var Rm=(()=>{class t{_validator=pm;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):pm,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,features:[Ue]})}return t})(),ZO={provide:go,useExisting:It(()=>Gl),multi:!0},Gl=(()=>{class t extends Rm{max;inputName="max";normalizeInput=e=>OD(e);createValidator=e=>gD(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&me("max",r._enabled?r.max:null)},inputs:{max:"max"},standalone:!1,features:[pe([ZO]),X]})}return t})(),KO={provide:go,useExisting:It(()=>ql),multi:!0},ql=(()=>{class t extends Rm{min;inputName="min";normalizeInput=e=>OD(e);createValidator=e=>pD(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&me("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[pe([KO]),X]})}return t})(),XO={provide:go,useExisting:It(()=>Ql),multi:!0};var Ql=(()=>{class t extends Rm{required;inputName="required";normalizeInput=L;createValidator=e=>_D;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&me("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[pe([XO]),X]})}return t})();var JO={provide:go,useExisting:It(()=>G_),multi:!0},G_=(()=>{class t extends Rm{minlength;inputName="minlength";normalizeInput=e=>YO(e);createValidator=e=>vD(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&me("minlength",r._enabled?r.minlength:null)},inputs:{minlength:"minlength"},standalone:!1,features:[pe([JO]),X]})}return t})();var eF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({})}return t})();var ui=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Tm,useValue:e.callSetDisabledState??$_}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[eF]})}return t})();var Oa={headers:new Zt({"Content-Type":"application/json"})},Fa=class t{http=d(Ct);studentsUrl="http://localhost:8080/students";getStudents(){return this.http.get(this.studentsUrl).pipe(Ve(n=>this.log(`size of the list = ${n.length}`)),ut(this.handleError("getStudent all")))}getStudent(n){let e=`${this.studentsUrl}/${n}`;return this.http.get(e).pipe(Ve(i=>this.log(`fetched student id=${n}`)),ut(this.handleError(`getStudent id=${n}`)))}addStudent(n){return this.http.post(this.studentsUrl,n,Oa).pipe(Ve(e=>this.log(`added student id=${e.id}`)),ut(this.handleError("addStudent")))}deleteStudent(n){let e=typeof n=="number"?n:n.id,i=`${this.studentsUrl}/${e}`;return this.http.delete(i,Oa).pipe(Ve(r=>this.log(`deleted student id=${e}`)),ut(this.handleError("deleteStudent")))}deleteStudents(){return this.http.delete(this.studentsUrl,Oa).pipe(Ve(n=>this.log("deleted students")),ut(this.handleError("deleteStudents")))}updateStudent(n,e){return this.http.put(`${this.studentsUrl}/${e}`,n,Oa).pipe(Ve(i=>this.log(`updated student id=${i.id}`)),ut(this.handleError("updateStudent")))}updateAllStudents(n){return this.http.put(this.studentsUrl,n,Oa).pipe(Ve(e=>this.log(`updated all students, size = ${e.length}`)),ut(this.handleError("updateAllStudents")))}patchStudent(n,e){return this.http.patch(`${this.studentsUrl}/${e}`,n,Oa).pipe(Ve(i=>this.log(`patched student id=${e}`)),ut(this.handleError("patchStudent")))}getMyProfile(){let n=`${this.studentsUrl}/me`;return this.http.get(n).pipe(Ve(e=>this.log("fetched my profile")),ut(this.handleError("getMyProfile")))}handleError(n="operation",e){return i=>(console.error(i),this.log(`${n} failed: ${i.message}`),W(e))}log(n){console.log("StudentService: "+n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var Zl=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},q_=class extends Zl{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Sr=class extends Zl{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Q_=class extends Zl{element;constructor(n){super(),this.element=n instanceof O?n.nativeElement:n}},Am=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof q_)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Sr)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Q_)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Nm=class extends Am{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(ri,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||ce.NULL,o=r.get(Be,i.injector);e=Eu(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},FD=(()=>{class t extends Sr{constructor(){let e=d(Ge),i=d(tt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[X]})}return t})(),Y_=(()=>{class t extends Am{_moduleRef=d(ri,{optional:!0});_document=d(ee);_viewContainerRef=d(tt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new j;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[X]})}return t})(),PD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({})}return t})();var Om=new WeakMap,gt=(()=>{class t{_appRef;_injector=d(ce);_environmentInjector=d(Be);load(e){let i=this._appRef=this._appRef||this._injector.get(on),r=Om.get(i);r||(r={loaders:new Set,refs:[]},Om.set(i,r),i.onDestroy(()=>{Om.get(i)?.refs.forEach(o=>o.destroy()),Om.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Eu(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Fm;function tF(){if(Fm===void 0&&(Fm=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Fm=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Fm}function vo(t){return tF()?.createHTML(t)||t}function LD(t,n,e){let i=e.sanitize(ht.HTML,n);t.innerHTML=vo(i||"")}var zn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Xl(t){return t.buttons===0||t.detail===0}function Jl(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Z_;function VD(){if(Z_==null){let t=typeof document<"u"?document.head:null;Z_=!!(t&&(t.createShadowRoot||t.attachShadow))}return Z_}function K_(t){if(VD()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Mt(t){return t.composedPath?t.composedPath()[0]:t.target}var X_;try{X_=typeof Intl<"u"&&Intl.v8BreakIterator}catch{X_=!1}var Ae=(()=>{class t{_platformId=d(jt);isBrowser=this._platformId?ai(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||X_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ec;function BD(){if(ec==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ec=!0}))}finally{ec=ec||!1}return ec}function Pa(t){return BD()?t:!!t.capture}function bo(t,n=0){return jD(t)?Number(t):arguments.length===2?n:0}function jD(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function zt(t){return t instanceof O?t.nativeElement:t}var UD=new y("cdk-input-modality-detector-options"),HD={ignoreKeys:[18,17,224,91,16]},zD=650,J_={passive:!0,capture:!0},$D=(()=>{class t{_platform=d(Ae);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Xe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Mt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<zD||(this._modality.next(Xl(e)?"keyboard":"mouse"),this._mostRecentTarget=Mt(e))};_onTouchstart=e=>{if(Jl(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Mt(e)};constructor(){let e=d(U),i=d(ee),r=d(UD,{optional:!0});if(this._options=C(C({},HD),r),this.modalityDetected=this._modality.pipe(Is(1)),this.modalityChanged=this.modalityDetected.pipe(Xc()),this._platform.isBrowser){let o=d(st).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,J_),o.listen(i,"mousedown",this._onMousedown,J_),o.listen(i,"touchstart",this._onTouchstart,J_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),tc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(tc||{}),WD=new y("cdk-focus-monitor-default-options"),Pm=Pa({passive:!0,capture:!0}),yo=(()=>{class t{_ngZone=d(U);_platform=d(Ae);_inputModalityDetector=d($D);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(ee);_stopInputModalityDetector=new M;constructor(){let e=d(WD,{optional:!0});this._detectionMode=e?.detectionMode||tc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Mt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=zt(e);if(!this._platform.isBrowser||r.nodeType!==1)return W();let o=K_(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new M,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=zt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=zt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===tc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===tc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?zD:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Mt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Pm),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Pm)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(we(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Pm),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Pm),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ev=(()=>{class t{_elementRef=d(O);_focusMonitor=d(yo);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new j;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();function tv(t){return Array.isArray(t)?t:[t]}var GD=new Set,wo,nv=(()=>{class t{_platform=d(Ae);_nonce=d(lo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):iF}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&nF(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function nF(t,n){if(!GD.has(t))try{wo||(wo=document.createElement("style"),n&&wo.setAttribute("nonce",n),wo.setAttribute("type","text/css"),document.head.appendChild(wo)),wo.sheet&&(wo.sheet.insertRule(`@media ${t} {body{ }}`,0),GD.add(t))}catch(e){console.error(e)}}function iF(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}function rF(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var qD=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),oF=(()=>{class t{_mutationObserverFactory=d(qD);_observedElements=new Map;_ngZone=d(U);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=zt(e);return new ie(r=>{let a=this._observeElement(i).pipe(ue(s=>s.filter(l=>!rF(l))),Ne(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new M,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Lm=(()=>{class t{_contentObserver=d(oF);_elementRef=d(O);event=new j;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=bo(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(zr(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",L],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Vm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({providers:[qD]})}return t})();var QD=new y("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),YD=new y("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),aF=0,iv=(()=>{class t{_ngZone=d(U);_defaultOptions=d(YD,{optional:!0});_liveElement;_document=d(ee);_sanitizer=d(yl);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=d(QD,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:LD(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${aF++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sF=200,Bm=class{_letterKeyStream=new M;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new M;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:sF;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Ve(e=>this._pressedLetters.push(e)),zr(n),Ne(()=>this._pressedLetters.length>0),ue(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Cn(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var La=class{_items;_activeItemIndex=D(-1);_activeItem=D(null);_wrap=!1;_typeaheadSubscription=oe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Nn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):oi(n)&&(this._effectRef=Pi(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new M;change=new M;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Bm(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Cn(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return oi(this._items)?this._items():this._items instanceof Nn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var nc=class extends La{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Co=class extends La{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var av={},_t=class t{_appId=d(ua);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),av.hasOwnProperty(n)||(av[n]=0),`${n}${e?t._infix+"-":""}${av[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var JD=" ";function eE(t,n,e){let i=tE(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(JD)))}function sv(t,n,e){let i=tE(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(JD)):t.removeAttribute(n)}function tE(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var lF=new y("cdk-dir-doc",{providedIn:"root",factory:()=>d(ee)}),cF=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function nE(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?cF.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Tt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=D("ltr");change=new j;constructor(){let e=d(lF,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(nE(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ce=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({})}return t})();var lv=class{_box;_destroyed=new M;_resizeSubject=new M;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ie(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ne(e=>e.some(i=>i.target===n)),td({bufferSize:1,refCount:!0}),we(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},jm=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(U);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new lv(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $n=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})($n||{}),Um,xo;function Hm(){if(xo==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return xo=!1,xo;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)xo=!0;else{let t=Element.prototype.scrollTo;t?xo=!/\{\s*\[native code\]\s*\}/.test(t.toString()):xo=!1}}return xo}function Va(){if(typeof document!="object"||!document)return $n.NORMAL;if(Um==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Um=$n.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Um=t.scrollLeft===0?$n.NEGATED:$n.INVERTED),t.remove()}return Um}function cv(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ba,iE=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function dv(){if(Ba)return Ba;if(typeof document!="object"||!document)return Ba=new Set(iE),Ba;let t=document.createElement("input");return Ba=new Set(iE.filter(n=>(t.setAttribute("type",n),t.type===n))),Ba}function zm(t){return t&&typeof t.connect=="function"&&!(t instanceof vs)}var Wn=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(Wn||{}),$m=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,i,r,o){n.forEachOperation((a,s,l)=>{let c,u;if(a.previousIndex==null){let h=()=>i(a,s,l);c=this._insertView(h,l,e,r(a)),u=c?Wn.INSERTED:Wn.REPLACED}else l==null?(this._detachAndCacheView(s,e),u=Wn.REMOVED):(c=this._moveView(s,l,e,r(a)),u=Wn.MOVED);o&&o({context:c?.context,operation:u,record:a})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,i,r){let o=this._insertViewFromCache(e,i);if(o){o.context.$implicit=r;return}let a=n();return i.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(n,e){let i=e.detach(n);this._maybeCacheView(i,e)}_moveView(n,e,i,r){let o=i.get(n);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let i=e.indexOf(n);i===-1?n.destroy():e.remove(i)}}_insertViewFromCache(n,e){let i=this._viewCache.pop();return i&&e.insert(i,n),i||null}};var uF=20,Gm=(()=>{class t{_ngZone=d(U);_platform=d(Ae);_renderer=d(st).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new M;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=uF){return this._platform.isBrowser?new ie(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Ho(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):W()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ne(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=zt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rE=(()=>{class t{elementRef=d(O);scrollDispatcher=d(Gm);ngZone=d(U);dir=d(Tt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new M;_renderer=d(ze);_cleanupScroll;_elementScrolled=new M;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&Va()!=$n.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),Va()==$n.INVERTED?e.left=e.right:Va()==$n.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Hm()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&Va()==$n.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Va()==$n.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),mF=20,Gn=(()=>{class t{_platform=d(Ae);_listeners;_viewportSize=null;_change=new M;_document=d(ee);constructor(){let e=d(U),i=d(st).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=mF){return e>0?this._change.pipe(Ho(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oE=new y("CDK_VIRTUAL_SCROLL_VIEWPORT");var Wm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({})}return t})(),ic=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Ce,Wm,Ce,Wm]})}return t})();var fF=new y("MATERIAL_ANIMATIONS"),aE=null;function hF(){return d(fF,{optional:!0})?.animationsDisabled||d(el,{optional:!0})==="NoopAnimations"?"di-disabled":(aE??=d(nv).matchMedia("(prefers-reduced-motion)").matches,aE?"reduced-motion":"enabled")}function dt(){return hF()!=="enabled"}function ot(t){return t==null?"":typeof t=="string"?t:`${t}px`}function $t(t){return t!=null&&`${t}`!="false"}var xn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(xn||{}),uv=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=xn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},sE=Pa({passive:!0,capture:!0}),mv=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,sE)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,sE)))}_delegateEventHandler=n=>{let e=Mt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},rc={enterDuration:225,exitDuration:150},pF=800,lE=Pa({passive:!0,capture:!0}),cE=["mousedown","touchstart"],dE=["mouseup","mouseleave","touchend","touchcancel"],gF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Do=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new mv;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=zt(i)),o&&o.get(gt).load(gF)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=C(C({},rc),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||_F(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),g=h.transitionProperty,_=h.transitionDuration,b=g==="none"||_==="0s"||_==="0s, 0s"||r.width===0&&r.height===0,S=new uv(this,u,i,b);u.style.transform="scale3d(1, 1, 1)",S.state=xn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=S);let I=null;return!b&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let T=()=>{I&&(I.fallbackTimer=null),clearTimeout(at),this._finishRippleTransition(S)},ve=()=>this._destroyRipple(S),at=setTimeout(ve,c+100);u.addEventListener("transitionend",T),u.addEventListener("transitioncancel",ve),I={onTransitionEnd:T,onTransitionCancel:ve,fallbackTimer:at}}),this._activeRipples.set(S,I),(b||!c)&&this._finishRippleTransition(S),S}fadeOutRipple(n){if(n.state===xn.FADING_OUT||n.state===xn.HIDDEN)return;let e=n.element,i=C(C({},rc),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=xn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=zt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,cE.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{dE.forEach(e=>{this._triggerElement.addEventListener(e,this,lE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===xn.FADING_IN?this._startFadeOutTransition(n):n.state===xn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=xn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=xn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Xl(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+pF;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Jl(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===xn.VISIBLE||n.config.terminateOnPointerUp&&n.state===xn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(cE.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(dE.forEach(e=>n.removeEventListener(e,this,lE)),this._pointerUpEventsRegistered=!1))}};function _F(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Ir=new y("mat-ripple-global-options"),oc=(()=>{class t{_elementRef=d(O);_animationsDisabled=dt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(U),i=d(Ae),r=d(Ir,{optional:!0}),o=d(ce);this._globalOptions=r||{},this._rippleRenderer=new Do(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:C(C(C({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,C(C({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,C(C({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&$("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var _v=["*"];function vF(t,n){t&1&&z(0)}var bF=["tabListContainer"],yF=["tabList"],wF=["tabListInner"],CF=["nextPaginator"],xF=["previousPaginator"],DF=["content"];function EF(t,n){}var SF=["tabBodyWrapper"],IF=["tabHeader"];function MF(t,n){}function TF(t,n){if(t&1&&se(0,MF,0,0,"ng-template",12),t&2){let e=w().$implicit;Z("cdkPortalOutlet",e.templateLabel)}}function kF(t,n){if(t&1&&p(0),t&2){let e=w().$implicit;_e(e.textLabel)}}function RF(t,n){if(t&1){let e=Ie();m(0,"div",7,2),R("click",function(){let r=G(e),o=r.$implicit,a=r.$index,s=w(),l=qe(1);return q(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=G(e).$index,a=w();return q(a._tabFocusChanged(r,o))}),ne(2,"span",8)(3,"div",9),m(4,"span",10)(5,"span",11),F(6,TF,1,1,null,12)(7,kF,1,1),f()()()}if(t&2){let e=n.$implicit,i=n.$index,r=qe(1),o=w();ct(e.labelClass),$("mdc-tab--active",o.selectedIndex===i),Z("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),me("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),v(3),Z("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),v(3),P(e.templateLabel?6:7)}}function AF(t,n){t&1&&z(0)}function NF(t,n){if(t&1){let e=Ie();m(0,"mat-tab-body",13),R("_onCentered",function(){G(e);let r=w();return q(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){G(e);let o=w();return q(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){G(e);let o=w();return q(o._bodyCentered(r))}),f()}if(t&2){let e=n.$implicit,i=n.$index,r=w();ct(e.bodyClass),Z("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),me("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var OF=new y("MatTabContent"),FF=(()=>{class t{template=d(Ge);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","matTabContent",""]],features:[pe([{provide:OF,useExisting:t}])]})}return t})(),PF=new y("MatTabLabel"),hE=new y("MAT_TAB"),LF=(()=>{class t extends FD{_closestTab=d(hE,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[pe([{provide:PF,useExisting:t}]),X]})}return t})(),pE=new y("MAT_TAB_GROUP"),So=(()=>{class t{_viewContainerRef=d(tt);_closestTabGroup=d(pE,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new M;position=null;origin=null;isActive=!1;constructor(){d(gt).load(zn)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Sr(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Ze(o,LF,5)(o,FF,7,Ge),i&2){let a;A(a=N())&&(r.templateLabel=a.first),A(a=N())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&lt(Ge,7),i&2){let o;A(o=N())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&me("id",null)},inputs:{disabled:[2,"disabled","disabled",L],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[pe([{provide:hE,useExisting:t}]),Ue],ngContentSelectors:_v,decls:1,vars:0,template:function(i,r){i&1&&(xe(),fu(0,vF,1,0,"ng-template"))},encapsulation:2})}return t})(),fv="mdc-tab-indicator--active",uE="mdc-tab-indicator--no-transition",hv=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},VF=(()=>{class t{_elementRef=d(O);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(fv);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(uE),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(uE),i.classList.add(fv),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(fv)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",L]}})}return t})();var gE=(()=>{class t extends VF{elementRef=d(O);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(me("aria-disabled",!!r.disabled),$("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",L]},features:[X]})}return t})(),mE={passive:!0},BF=650,jF=100,UF=(()=>{class t{_elementRef=d(O);_changeDetectorRef=d(Qe);_viewportRuler=d(Gn);_dir=d(Tt,{optional:!0});_ngZone=d(U);_platform=d(Ae);_sharedResizeObserver=d(jm);_injector=d(ce);_renderer=d(ze);_animationsDisabled=dt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new M;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new M;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new j;indexFocused=new j;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),mE),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),mE))}ngAfterContentInit(){let e=this._dir?this._dir.change:W("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(zr(32),we(this._destroyed)),r=this._viewportRuler.change(150).pipe(we(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Co(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),pt(o,{injector:this._injector}),At(e,r,i,this._items.changes,this._itemsResized()).pipe(we(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?Ye:this._items.changes.pipe(Et(this._items),it(e=>new ie(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Is(1),Ne(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Cn(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let c=this.scrollDistance,u=this.scrollDistance+r;s<c?this.scrollDistance-=c-s:l>u&&(this.scrollDistance+=Math.min(l-u,s-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Es(BF,jF).pipe(we(At(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",L],selectedIndex:[2,"selectedIndex","selectedIndex",vn]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),HF=(()=>{class t extends UF{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new hv(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275cmp=V({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Ze(o,gE,4),i&2){let a;A(a=N())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&lt(bF,7)(yF,7)(wF,7)(CF,5)(xF,5),i&2){let o;A(o=N())&&(r._tabListContainer=o.first),A(o=N())&&(r._tabList=o.first),A(o=N())&&(r._tabListInner=o.first),A(o=N())&&(r._nextPaginator=o.first),A(o=N())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&$("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",L]},features:[X],ngContentSelectors:_v,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(xe(),m(0,"div",5,0),R("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),ne(2,"div",6),f(),m(3,"div",7,1),R("keydown",function(a){return r._handleKeydown(a)}),m(5,"div",8,2),R("cdkObserveContent",function(){return r._onContentChanges()}),m(7,"div",9,3),z(9),f()()(),m(10,"div",10,4),R("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),ne(12,"div",6),f()),i&2&&($("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),Z("matRippleDisabled",r._disableScrollBefore||r.disableRipple),v(3),$("_mat-animation-noopable",r._animationsDisabled),v(2),me("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),v(5),$("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),Z("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[oc,Lm],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return t})(),zF=new y("MAT_TABS_CONFIG"),fE=(()=>{class t extends Y_{_host=d(pv);_ngZone=d(U);_centeringSub=oe.EMPTY;_leavingSub=oe.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Et(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","matTabBodyHost",""]],features:[X]})}return t})(),pv=(()=>{class t{_elementRef=d(O);_dir=d(Tt,{optional:!0});_ngZone=d(U);_injector=d(ce);_renderer=d(ze);_diAnimationsDisabled=dt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=oe.EMPTY;_position;_previousPosition;_onCentering=new j;_beforeCentering=new j;_afterLeavingCenter=new j;_onCentered=new j(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=d(Qe);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),pt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),pt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&lt(fE,5)(DF,5),i&2){let o;A(o=N())&&(r._portalHost=o.first),A(o=N())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&me("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(m(0,"div",1,0),se(2,EF,0,0,"ng-template",2),f()),i&2&&$("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[fE,rE],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return t})(),ja=(()=>{class t{_elementRef=d(O);_changeDetectorRef=d(Qe);_ngZone=d(U);_tabsSubscription=oe.EMPTY;_tabLabelSubscription=oe.EMPTY;_tabBodySubscription=oe.EMPTY;_diAnimationsDisabled=dt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Nn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new j;focusChange=new j;animationDone=new j;selectedTabChange=new j(!0);_groupId;_isServer=!d(Ae).isBrowser;constructor(){let e=d(zF,{optional:!0});this._groupId=d(_t).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Et(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new gv;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=At(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Ze(o,So,5),i&2){let a;A(a=N())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&lt(SF,5)(IF,5)(pv,5),i&2){let o;A(o=N())&&(r._tabBodyWrapper=o.first),A(o=N())&&(r._tabHeader=o.first),A(o=N())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(me("mat-align-tabs",r.alignTabs),ct("mat-"+(r.color||"primary")),Ut("--mat-tab-animation-duration",r.animationDuration),$("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",L],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",L],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",L],selectedIndex:[2,"selectedIndex","selectedIndex",vn],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",vn],disablePagination:[2,"disablePagination","disablePagination",L],disableRipple:[2,"disableRipple","disableRipple",L],preserveContent:[2,"preserveContent","preserveContent",L],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[pe([{provide:pE,useExisting:t}])],ngContentSelectors:_v,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(xe(),m(0,"mat-tab-header",3,0),R("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),bt(2,RF,8,17,"div",4,_u),f(),F(4,AF,1,0),m(5,"div",5,1),bt(7,NF,1,10,"mat-tab-body",6,_u),f()),i&2&&(Z("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),gu("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),v(2),yt(r._tabs),v(2),P(r._isServer?4:-1),v(),$("_mat-animation-noopable",r._animationsDisabled()),v(2),yt(r._tabs))},dependencies:[HF,gE,ev,oc,Y_,pv],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return t})(),gv=class{index;tab};var Ua=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Ce]})}return t})();var $F=["*"];var WF=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],GF=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],qF=new y("MAT_CARD_CONFIG"),mi=(()=>{class t{appearance;constructor(){let e=d(qF,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&$("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:$F,decls:1,vars:0,template:function(i,r){i&1&&(xe(),z(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),fi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var hi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),pi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})(),_E=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&$("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),gi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:GF,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(xe(WF),z(0),an(1,"div",0),z(2,1),sn(),z(3,2))},encapsulation:2,changeDetection:0})}return t})();var _i=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Ce]})}return t})();var qm=class{applyChanges(n,e,i,r,o){n.forEachOperation((a,s,l)=>{let c,u;if(a.previousIndex==null){let h=i(a,s,l);c=e.createEmbeddedView(h.templateRef,h.context,h.index),u=Wn.INSERTED}else l==null?(e.remove(s),u=Wn.REMOVED):(c=e.get(s),e.move(c,l),u=Wn.MOVED);o&&o({context:c?.context,operation:u,record:a})})}detach(){}};var QF=[[["caption"]],[["colgroup"],["col"]],"*"],YF=["caption","colgroup, col","*"];function ZF(t,n){t&1&&z(0,2)}function KF(t,n){t&1&&(m(0,"thead",0),Ft(1,1),f(),m(2,"tbody",0),Ft(3,2)(4,3),f(),m(5,"tfoot",0),Ft(6,4),f())}function XF(t,n){t&1&&Ft(0,1)(1,2)(2,3)(3,4)}var qn=new y("CDK_TABLE");var Zm=(()=>{class t{template=d(Ge);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkCellDef",""]]})}return t})(),Km=(()=>{class t{template=d(Ge);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkHeaderCellDef",""]]})}return t})(),yE=(()=>{class t{template=d(Ge);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkFooterCellDef",""]]})}return t})(),Ha=(()=>{class t{_table=d(qn,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&Ze(o,Zm,5)(o,Km,5)(o,yE,5),i&2){let a;A(a=N())&&(r.cell=a.first),A(a=N())&&(r.headerCell=a.first),A(a=N())&&(r.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",L],stickyEnd:[2,"stickyEnd","stickyEnd",L]}})}return t})(),Ym=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},wE=(()=>{class t extends Ym{constructor(){super(d(Ha),d(O))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[X]})}return t})();var CE=(()=>{class t extends Ym{constructor(){let e=d(Ha),i=d(O);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[X]})}return t})();var yv=(()=>{class t{template=d(Ge);_differs=d(ji);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof lc?e.headerCell.template:this instanceof wv?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,features:[Ue]})}return t})(),lc=(()=>{class t extends yv{_table=d(qn,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(d(Ge),d(ji))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",L]},features:[X,Ue]})}return t})(),wv=(()=>{class t extends yv{_table=d(qn,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(d(Ge),d(ji))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",L]},features:[X,Ue]})}return t})(),Xm=(()=>{class t extends yv{_table=d(qn,{optional:!0});when;constructor(){super(d(Ge),d(ji))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[X]})}return t})(),Io=(()=>{class t{_viewContainer=d(tt);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdkCellOutlet",""]]})}return t})(),Cv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Ft(0,0)},dependencies:[Io],encapsulation:2})}return t})();var xv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Ft(0,0)},dependencies:[Io],encapsulation:2})}return t})(),xE=(()=>{class t{templateRef=d(Ge);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["ng-template","cdkNoDataRow",""]]})}return t})(),vE=["top","bottom","left","right"],bv=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,i=!0,r=!0,o,a,s){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=a,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let i=[];for(let r of n)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));pt({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,i,r=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(I=>I)||i.some(I=>I))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=n[0],s=a.children.length,l=this.direction==="rtl",c=l?"right":"left",u=l?"left":"right",h=e.lastIndexOf(!0),g=i.indexOf(!0),_,b,S;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...i]}),pt({earlyRead:()=>{_=this._getCellWidths(a,r),b=this._getStickyStartColumnPositions(_,e),S=this._getStickyEndColumnPositions(_,i)},write:()=>{for(let I of n)for(let T=0;T<s;T++){let ve=I.children[T];e[T]&&this._addStickyStyle(ve,c,b[T],T===h),i[T]&&this._addStickyStyle(ve,u,S[T],T===g)}this._positionListener&&_.some(I=>!!I)&&(this._positionListener.stickyColumnsUpdated({sizes:h===-1?[]:_.slice(0,h+1).map((I,T)=>e[T]?I:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:g===-1?[]:_.slice(g).map((I,T)=>i[T+g]?I:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,i){if(!this._isBrowser)return;let r=i==="bottom"?n.slice().reverse():n,o=i==="bottom"?e.slice().reverse():e,a=[],s=[],l=[];pt({earlyRead:()=>{for(let c=0,u=0;c<r.length;c++){if(!o[c])continue;a[c]=u;let h=r[c];l[c]=this._isNativeHtmlTable?Array.from(h.children):[h];let g=this._retrieveElementSize(h).height;u+=g,s[c]=g}},write:()=>{let c=o.lastIndexOf(!0);for(let u=0;u<r.length;u++){if(!o[u])continue;let h=a[u],g=u===c;for(let _ of l[u])this._addStickyStyle(_,i,h,g)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:a,elements:l}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:a,elements:l})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&pt({write:()=>{let i=n.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let r of e)n.style[r]="",n.classList.remove(this._borderCellCss[r]);vE.some(r=>e.indexOf(r)===-1&&n.style[r])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,i,r){n.classList.add(this._stickCellCss),r&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${i}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of vE)n.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=n.children;for(let o=0;o<r.length;o++){let a=r[o];i.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(n,e){let i=[],r=0;for(let o=0;o<n.length;o++)e[o]&&(i[o]=r,r+=n[o]);return i}_getStickyEndColumnPositions(n,e){let i=[],r=0;for(let o=n.length;o>0;o--)e[o]&&(i[o]=r,r+=n[o]);return i}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let i=n.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(n,r),this._resizeObserver.observe(n,{box:"border-box"})),r}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(n){let e=!1;for(let i of n){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&JF(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function JF(t){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>t.classList.contains(n))}var sc=new y("STICKY_POSITIONING_LISTENER");var Dv=(()=>{class t{viewContainer=d(tt);elementRef=d(O);constructor(){let e=d(qn);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","rowOutlet",""]]})}return t})(),Ev=(()=>{class t{viewContainer=d(tt);elementRef=d(O);constructor(){let e=d(qn);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","headerRowOutlet",""]]})}return t})(),Sv=(()=>{class t{viewContainer=d(tt);elementRef=d(O);constructor(){let e=d(qn);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","footerRowOutlet",""]]})}return t})(),Iv=(()=>{class t{viewContainer=d(tt);elementRef=d(O);constructor(){let e=d(qn);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","noDataRowOutlet",""]]})}return t})(),Mv=(()=>{class t{_differs=d(ji);_changeDetectorRef=d(Qe);_elementRef=d(O);_dir=d(Tt,{optional:!0});_platform=d(Ae);_viewRepeater;_viewportRuler=d(Gn);_injector=d(ce);_virtualScrollViewport=d(oE,{optional:!0,host:!0});_positionListener=d(sc,{optional:!0})||d(sc,{optional:!0,skipSelf:!0});_document=d(ee);_data;_renderedRange;_onDestroy=new M;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new M;_footerRowStickyUpdates=new M;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new M;_dataStream=new M;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new j;viewChange=new Xe({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){d(new Bn("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(we(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new $m:new qm,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),zm(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,a)=>this._getEmbeddedViewArgs(r.item,a),r=>r.item.data,r=>{r.operation===Wn.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=bE(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=bE(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let s=0;s<i.length;s++)this._renderRows[s].rowDef===o&&a.push(i[s]);this._addStickyColumnStyles(a,o)}),r.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let a=this._data[o],s=this._getRenderRowsForData(a,o,r.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let l=0;l<s.length;l++){let c=s[l],u=this._cachedRenderRowsMap.get(c.data);u.has(c.rowDef)?u.get(c.rowDef).push(c):u.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(a=>{let s=r&&r.has(a)?r.get(a):[];if(s.length){let l=s.shift();return l.dataIndex=i,l}else return{data:e,rowDef:a,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Qm(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Qm(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Qm(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Qm(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,s)=>{let l=!!s.getColumnsDiff();return a||l},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],zm(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;zm(this.dataSource)?e=this.dataSource.connect(this):Vr(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=W(this.dataSource)),this._renderChangeSubscription=jr([e,this.viewChange]).pipe(we(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(s=>{let l=this._columnDefsByName.get(s);return l}),o=r.map(s=>s.sticky),a=r.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let a=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),a}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))Io.mostRecentCellOutlet&&Io.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let a=e.get(i).context;a.count=r,a.first=i===0,a.last=i===r-1,a.even=i%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[i].dataIndex,a.renderIndex=i):a.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new bv(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:W()).pipe(we(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?Oc:Rc;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Ho(0,i),we(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),jr([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(we(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s){let l=o.offsets[a],c=r!==0?Math.max(r-l,l):-l;for(let u of s)u.style.top=`${-c}px`}}}),jr([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(we(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s)for(let l of s)l.style.bottom=`${r+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let s=a.querySelectorAll(e._cellSelector);for(let l=0;l<s.length;l++)s[l].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let a=e.start-r.start,s=e.end-e.start,l,c;for(let g=0;g<s;g++){let _=o.get(g+a);if(_&&_.rootNodes.length){l=c=_.rootNodes[0];break}}for(let g=s-1;g>-1;g--){let _=o.get(g+a);if(_&&_.rootNodes.length){c=_.rootNodes[_.rootNodes.length-1];break}}let u=l?.getBoundingClientRect?.(),h=c?.getBoundingClientRect?.();return u&&h?h.bottom-u.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&Ze(o,xE,5)(o,Ha,5)(o,Xm,5)(o,lc,5)(o,wv,5),i&2){let a;A(a=N())&&(r._noDataRow=a.first),A(a=N())&&(r._contentColumnDefs=a),A(a=N())&&(r._contentRowDefs=a),A(a=N())&&(r._contentHeaderRowDefs=a),A(a=N())&&(r._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&$("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",L],fixedLayout:[2,"fixedLayout","fixedLayout",L],recycleRows:[2,"recycleRows","recycleRows",L]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[pe([{provide:qn,useExisting:t},{provide:sc,useValue:null}])],ngContentSelectors:YF,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(xe(QF),z(0),z(1,1),F(2,ZF,1,0),F(3,KF,7,0)(4,XF,4,0)),i&2&&(v(2),P(r._isServer?2:-1),v(),P(r._isNativeHtmlTable?3:4))},dependencies:[Ev,Dv,Iv,Sv],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return t})();function Qm(t,n){return t.concat(Array.from(n))}function bE(t,n){let e=n.toUpperCase(),i=t.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var DE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[ic]})}return t})();var cc=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new M;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var eP=[[["caption"]],[["colgroup"],["col"]],"*"],tP=["caption","colgroup, col","*"];function nP(t,n){t&1&&z(0,2)}function iP(t,n){t&1&&(m(0,"thead",0),Ft(1,1),f(),m(2,"tbody",2),Ft(3,3)(4,4),f(),m(5,"tfoot",0),Ft(6,5),f())}function rP(t,n){t&1&&Ft(0,1)(1,3)(2,4)(3,5)}var za=(()=>{class t extends Mv{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275cmp=V({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&$("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[pe([{provide:Mv,useExisting:t},{provide:qn,useExisting:t},{provide:sc,useValue:null}]),X],ngContentSelectors:tP,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(xe(eP),z(0),z(1,1),F(2,nP,1,0),F(3,iP,7,0)(4,rP,4,0)),i&2&&(v(2),P(r._isServer?2:-1),v(),P(r._isNativeHtmlTable?3:4))},dependencies:[Ev,Dv,Iv,Sv],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return t})(),$a=(()=>{class t extends Zm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matCellDef",""]],features:[pe([{provide:Zm,useExisting:t}]),X]})}return t})(),Wa=(()=>{class t extends Km{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matHeaderCellDef",""]],features:[pe([{provide:Km,useExisting:t}]),X]})}return t})();var Ga=(()=>{class t extends Ha{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[pe([{provide:Ha,useExisting:t}]),X]})}return t})(),qa=(()=>{class t extends wE{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[X]})}return t})();var Qa=(()=>{class t extends CE{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[X]})}return t})();var Ya=(()=>{class t extends lc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",L]},features:[pe([{provide:lc,useExisting:t}]),X]})}return t})();var Za=(()=>{class t extends Xm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[pe([{provide:Xm,useExisting:t}]),X]})}return t})(),Ka=(()=>{class t extends Cv{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275cmp=V({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[pe([{provide:Cv,useExisting:t}]),X],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Ft(0,0)},dependencies:[Io],encapsulation:2})}return t})();var Xa=(()=>{class t extends xv{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275cmp=V({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[pe([{provide:xv,useExisting:t}]),X],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&Ft(0,0)},dependencies:[Io],encapsulation:2})}return t})();var Ja=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[DE,Ce]})}return t})();var oP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),aP={passive:!0},EE=(()=>{class t{_platform=d(Ae);_ngZone=d(U);_renderer=d(st).createRenderer(null,null);_styleLoader=d(gt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ye;this._styleLoader.load(oP);let i=zt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new M,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,aP)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=zt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var SE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({})}return t})();var IE=new y("MAT_INPUT_VALUE_ACCESSOR");var sP=["notch"],lP=["matFormFieldNotchedOutline",""],cP=["*"],ME=["iconPrefixContainer"],TE=["textPrefixContainer"],kE=["iconSuffixContainer"],RE=["textSuffixContainer"],dP=["textField"],uP=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],mP=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function fP(t,n){t&1&&ne(0,"span",21)}function hP(t,n){if(t&1&&(m(0,"label",20),z(1,1),F(2,fP,1,0,"span",21),f()),t&2){let e=w(2);Z("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),me("for",e._control.disableAutomaticLabeling?null:e._control.id),v(2),P(!e.hideRequiredMarker&&e._control.required?2:-1)}}function pP(t,n){if(t&1&&F(0,hP,3,5,"label",20),t&2){let e=w();P(e._hasFloatingLabel()?0:-1)}}function gP(t,n){t&1&&ne(0,"div",7)}function _P(t,n){}function vP(t,n){if(t&1&&se(0,_P,0,0,"ng-template",13),t&2){w(2);let e=qe(1);Z("ngTemplateOutlet",e)}}function bP(t,n){if(t&1&&(m(0,"div",9),F(1,vP,1,1,null,13),f()),t&2){let e=w();Z("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),v(),P(e._forceDisplayInfixLabel()?-1:1)}}function yP(t,n){t&1&&(m(0,"div",10,2),z(2,2),f())}function wP(t,n){t&1&&(m(0,"div",11,3),z(2,3),f())}function CP(t,n){}function xP(t,n){if(t&1&&se(0,CP,0,0,"ng-template",13),t&2){w();let e=qe(1);Z("ngTemplateOutlet",e)}}function DP(t,n){t&1&&(m(0,"div",14,4),z(2,4),f())}function EP(t,n){t&1&&(m(0,"div",15,5),z(2,5),f())}function SP(t,n){t&1&&ne(0,"div",16)}function IP(t,n){t&1&&(m(0,"div",18),z(1,6),f())}function MP(t,n){if(t&1&&(m(0,"mat-hint",22),p(1),f()),t&2){let e=w(2);Z("id",e._hintLabelId),v(),_e(e.hintLabel)}}function TP(t,n){if(t&1&&(m(0,"div",19),F(1,MP,2,2,"mat-hint",22),z(2,7),ne(3,"div",23),z(4,8),f()),t&2){let e=w();v(),P(e.hintLabel?1:-1)}}var Kt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-label"]]})}return t})(),VE=new y("MatError"),ts=(()=>{class t{id=d(_t).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&Ln("id",r.id)},inputs:{id:"id"},features:[pe([{provide:VE,useExisting:t}])]})}return t})(),es=(()=>{class t{align="start";id=d(_t).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(Ln("id",r.id),me("align",null),$("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),kP=new y("MatPrefix");var BE=new y("MatSuffix"),ns=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[pe([{provide:BE,useExisting:t}])]})}return t})(),jE=new y("FloatingLabelParent"),AE=(()=>{class t{_elementRef=d(O);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(jm);_ngZone=d(U);_parent=d(jE);_resizeSubscription=new oe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return RP(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&$("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function RP(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var NE="mdc-line-ripple--active",Jm="mdc-line-ripple--deactivating",OE=(()=>{class t{_elementRef=d(O);_cleanupTransitionEnd;constructor(){let e=d(U),i=d(ze);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Jm),e.add(NE)}deactivate(){this._elementRef.nativeElement.classList.add(Jm)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Jm);e.propertyName==="opacity"&&r&&i.remove(NE,Jm)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),FE=(()=>{class t{_elementRef=d(O);_ngZone=d(U);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&lt(sP,5),i&2){let o;A(o=N())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&$("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:lP,ngContentSelectors:cP,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(xe(),_n(0,"div",1),an(1,"div",2,0),z(3),sn(),_n(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),dc=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t})}return t})();var uc=new y("MatFormField"),AP=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),PE="fill",NP="auto",LE="fixed",OP="translateY(-50%)",un=(()=>{class t{_elementRef=d(O);_changeDetectorRef=d(Qe);_platform=d(Ae);_idGenerator=d(_t);_ngZone=d(U);_defaults=d(AP,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=dl("iconPrefixContainer");_textPrefixContainerSignal=dl("textPrefixContainer");_iconSuffixContainerSignal=dl("iconSuffixContainer");_textSuffixContainerSignal=dl("textSuffixContainer");_prefixSuffixContainers=wt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=OC(Kt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=$t(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||NP}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||PE;this._appearanceSignal.set(i)}_appearanceSignal=D(PE);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||LE}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||LE}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new M;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=dt();constructor(){let e=this._defaults,i=d(Tt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Pi(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=wt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Et([void 0,void 0]),ue(()=>[i.errorState,i.userAriaDescribedBy]),ed(),Ne(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(we(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),At(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){LC({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=wt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",h=`${a+s}px`,_=`calc(${u} * (${h} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${OP} translateX(${_}))`,S=a+s+l+c;return[b,S]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(vu(o,r._labelChild,Kt,5),Ze(o,dc,5)(o,kP,5)(o,BE,5)(o,VE,5)(o,es,5)),i&2){yu();let a;A(a=N())&&(r._formFieldControl=a.first),A(a=N())&&(r._prefixChildren=a),A(a=N())&&(r._suffixChildren=a),A(a=N())&&(r._errorChildren=a),A(a=N())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(bu(r._iconPrefixContainerSignal,ME,5)(r._textPrefixContainerSignal,TE,5)(r._iconSuffixContainerSignal,kE,5)(r._textSuffixContainerSignal,RE,5),lt(dP,5)(ME,5)(TE,5)(kE,5)(RE,5)(AE,5)(FE,5)(OE,5)),i&2){yu(4);let o;A(o=N())&&(r._textField=o.first),A(o=N())&&(r._iconPrefixContainer=o.first),A(o=N())&&(r._textPrefixContainer=o.first),A(o=N())&&(r._iconSuffixContainer=o.first),A(o=N())&&(r._textSuffixContainer=o.first),A(o=N())&&(r._floatingLabel=o.first),A(o=N())&&(r._notchedOutline=o.first),A(o=N())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&$("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[pe([{provide:uc,useExisting:t},{provide:jE,useExisting:t}])],ngContentSelectors:mP,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(xe(uP),se(0,pP,1,1,"ng-template",null,0,wu),m(2,"div",6,1),R("click",function(a){return r._control.onContainerClick(a)}),F(4,gP,1,0,"div",7),m(5,"div",8),F(6,bP,2,2,"div",9),F(7,yP,3,0,"div",10),F(8,wP,3,0,"div",11),m(9,"div",12),F(10,xP,1,1,null,13),z(11),f(),F(12,DP,3,0,"div",14),F(13,EP,3,0,"div",15),f(),F(14,SP,1,0,"div",16),f(),m(15,"div",17),F(16,IP,2,0,"div",18)(17,TP,5,1,"div",19),f()),i&2){let o;v(2),$("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),v(2),P(!r._hasOutline()&&!r._control.disabled?4:-1),v(2),P(r._hasOutline()?6:-1),v(),P(r._hasIconPrefix?7:-1),v(),P(r._hasTextPrefix?8:-1),v(2),P(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),v(2),P(r._hasTextSuffix?12:-1),v(),P(r._hasIconSuffix?13:-1),v(),P(r._hasOutline()?-1:14),v(),$("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();v(),P((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[AE,FE,Vg,OE,es],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var is=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rs=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var Wt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Vm,un,Ce]})}return t})();var PP=["button","checkbox","file","hidden","image","radio","range","reset","submit"],LP=new y("MAT_INPUT_CONFIG"),vi=(()=>{class t{_elementRef=d(O);_platform=d(Ae);ngControl=d(Gi,{optional:!0,self:!0});_autofillMonitor=d(EE);_ngZone=d(U);_formField=d(uc,{optional:!0});_renderer=d(ze);_uid=d(_t).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(LP,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new M;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=$t(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Na.required)??!1}set required(e){this._required=$t(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&dv().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=$t(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>dv().has(e));constructor(){let e=d(qi,{optional:!0}),i=d(Wl,{optional:!0}),r=d(is),o=d(IE,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?oi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new rs(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Pi(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){PP.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&R("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(Ln("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),me("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),$("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",L]},exportAs:["matInput"],features:[pe([{provide:dc,useExisting:t}]),Ue]})}return t})(),bi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Wt,Wt,SE,Ce]})}return t})();var VP={capture:!0},BP=["focus","mousedown","mouseenter","touchstart"],kv="mat-ripple-loader-uninitialized",Rv="mat-ripple-loader-class-name",UE="mat-ripple-loader-centered",ef="mat-ripple-loader-disabled",tf=(()=>{class t{_document=d(ee);_animationsDisabled=dt();_globalRippleOptions=d(Ir,{optional:!0});_platform=d(Ae);_ngZone=d(U);_injector=d(ce);_eventCleanups;_hosts=new Map;constructor(){let e=d(st).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>BP.map(i=>e.listen(this._document,i,this._onInteraction,VP)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(kv,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Rv))&&e.setAttribute(Rv,i.className||""),i.centered&&e.setAttribute(UE,""),i.disabled&&e.setAttribute(ef,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(ef,""):e.removeAttribute(ef)}_onInteraction=e=>{let i=Mt(e);if(i instanceof HTMLElement){let r=i.closest(`[${kv}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Rv)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??rc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??rc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(ef),rippleConfig:{centered:e.hasAttribute(UE),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Do(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(kv)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jP=["mat-icon-button",""],UP=["*"],HP=new y("MAT_BUTTON_CONFIG");function HE(t){return t==null?void 0:vn(t)}var Av=(()=>{class t{_elementRef=d(O);_ngZone=d(U);_animationsDisabled=dt();_config=d(HP,{optional:!0});_focusMonitor=d(yo);_cleanupClick;_renderer=d(ze);_rippleLoader=d(tf);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(gt).load(zn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(me("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),ct(r.color?"mat-"+r.color:""),$("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",L],disabled:[2,"disabled","disabled",L],ariaDisabled:[2,"aria-disabled","ariaDisabled",L],disabledInteractive:[2,"disabledInteractive","disabledInteractive",L],tabIndex:[2,"tabIndex","tabIndex",HE],_tabindex:[2,"tabindex","_tabindex",HE]}})}return t})(),Nv=(()=>{class t extends Av{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[X],attrs:jP,ngContentSelectors:UP,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(xe(),_n(0,"span",0),z(1),_n(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Mr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Ce]})}return t})();var zP=["matButton",""],$P=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],WP=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var zE=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Dn=(()=>{class t extends Av{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=GP(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?zE.get(this._appearance):null,o=zE.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[X],attrs:zP,ngContentSelectors:WP,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(xe($P),_n(0,"span",0),z(1),an(2,"span",1),z(3,1),sn(),z(4,2),_n(5,"span",2)(6,"span",3)),i&2&&$("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function GP(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var En=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Mr,Ce]})}return t})();var $E=Hm();function XE(t){return new nf(t.get(Gn),t.get(ee))}var nf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ot(-this._previousScrollPosition.left),n.style.top=ot(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),$E&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),$E&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function JE(t,n){return new rf(t.get(Gm),t.get(U),t.get(Gn),n)}var rf=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ne(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var fc=class{enable(){}disable(){}attach(){}};function Ov(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function WE(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function pc(t,n){return new of(t.get(Gm),t.get(Gn),t.get(U),n)}var of=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Ov(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},eS=(()=>{class t{_injector=d(ce);constructor(){}noop=()=>new fc;close=e=>JE(this._injector,e);block=()=>XE(this._injector);reposition=e=>pc(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hc=class{positionStrategy;scrollStrategy=new fc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var af=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var tS=(()=>{class t{_attachedOverlays=[];_document=d(ee);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nS=(()=>{class t extends tS{_ngZone=d(U);_renderer=d(st).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),iS=(()=>{class t extends tS{_platform=d(Ae);_ngZone=d(U);_renderer=d(st).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Mt(e)};_clickListener=e=>{let i=Mt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(GE(s.overlayElement,i)||GE(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function GE(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var rS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),oS=(()=>{class t{_platform=d(Ae);_containerElement;_document=d(ee);_styleLoader=d(gt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||cv()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),cv()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(rS)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fv=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Pv(t){return t&&t.nodeType===1}var sf=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new M;_attachments=new M;_detachments=new M;_positionStrategy;_scrollStrategy;_locationChanges=oe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new M;_outsidePointerEvents=new M;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,u=!1,h,g){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=u,this._injector=h,this._renderer=g,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=pt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=C(C({},this._config),n),this._updateElementSize()}setDirection(n){this._config=te(C({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ot(this._config.width),n.height=ot(this._config.height),n.minWidth=ot(this._config.minWidth),n.minHeight=ot(this._config.minHeight),n.maxWidth=ot(this._config.maxWidth),n.maxHeight=ot(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Pv(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Fv(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=tv(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=pt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},qE="cdk-overlay-connected-position-bounding-box",qP=/([A-Za-z%]+)$/;function Lv(t,n){return new lf(n,t.get(Gn),t.get(ee),t.get(Ae),t.get(oS))}var lf=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new M;_resizeSubscription=oe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(qE),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(c,e,i,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let u=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);u>l&&(l=u,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Mo(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(qE),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof O?this._origin.nativeElement:Pv(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=YE(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let u=0-a,h=a+o.width-i.width,g=0-s,_=s+o.height-i.height,b=this._subtractOverflows(o.width,u,h),S=this._subtractOverflows(o.height,g,_),I=b*S;return{visibleArea:I,isCompletelyWithinViewport:o.width*o.height===I,fitsInViewportVertically:S===o.height,fitsInViewportHorizontally:b==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=QE(this._overlayRef.getConfig().minHeight),s=QE(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=YE(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),u=0,h=0;return r.width<=o.width?u=c||-a:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?h=l||-s:h=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:h},{x:n.x+u,y:n.y+h}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!QP(this._lastScrollVisibility,i)){let r=new af(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let _=Math.min(i.bottom-n.y+i.top,n.y),b=this._lastBoundingBoxSize.height;o=_*2,a=n.y-_,o>b&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-b/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,h,g;if(c)g=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)h=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let _=Math.min(i.right-n.x+i.left,n.x),b=this._lastBoundingBoxSize.width;u=_*2,h=n.x-_,u>b&&!this._isInitialRender&&!this._growAfterOpen&&(h=n.x-b/2)}return{top:a,left:h,bottom:s,right:g,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ot(i.width),r.height=ot(i.height),r.top=ot(i.top)||"auto",r.bottom=ot(i.bottom)||"auto",r.left=ot(i.left)||"auto",r.right=ot(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ot(o)),a&&(r.maxWidth=ot(a))}this._lastBoundingBoxSize=i,Mo(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Mo(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Mo(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Mo(i,this._getExactOverlayY(e,n,u)),Mo(i,this._getExactOverlayX(e,n,u))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=ot(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=ot(a.maxWidth):o&&(i.maxWidth="")),Mo(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ot(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ot(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:WE(n,i),isOriginOutsideView:Ov(n,i),isOverlayClipped:WE(e,i),isOverlayOutsideView:Ov(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&tv(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof O)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Mo(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function QE(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(qP);return!e||e==="px"?parseFloat(n):null}return t||null}function YE(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function QP(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var ZE="cdk-global-overlay-wrapper";function aS(t){return new cf}var cf=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(ZE),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,h=this._xOffset,g=this._overlayRef.getConfig().direction==="rtl",_="",b="",S="";l?S="flex-start":u==="center"?(S="center",g?b=h:_=h):g?u==="left"||u==="end"?(S="flex-end",_=h):(u==="right"||u==="start")&&(S="flex-start",b=h):u==="left"||u==="start"?(S="flex-start",_=h):(u==="right"||u==="end")&&(S="flex-end",b=h),n.position=this._cssPosition,n.marginLeft=l?"0":_,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":b,e.justifyContent=S,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(ZE),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},sS=(()=>{class t{_injector=d(ce);constructor(){}global(){return aS()}flexibleConnectedTo(e){return Lv(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gc=new y("OVERLAY_DEFAULT_CONFIG");function Vv(t,n){t.get(gt).load(rS);let e=t.get(oS),i=t.get(ee),r=t.get(_t),o=t.get(on),a=t.get(Tt),s=t.get(ze,null,{optional:!0})||t.get(st).createRenderer(null,null),l=new hc(n),c=t.get(gc,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let u=i.createElement("div"),h=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),h.appendChild(u),l.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let g=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Pv(g)?g.after(h):g?.type==="parent"?g.element.appendChild(h):e.getContainerElement().appendChild(h),new sf(new Nm(u,o,t),h,u,l,t.get(U),t.get(nS),i,t.get(br),t.get(iS),n?.disableAnimations??t.get(el,null,{optional:!0})==="NoopAnimations",t.get(Be),s)}var lS=(()=>{class t{scrollStrategies=d(eS);_positionBuilder=d(sS);_injector=d(ce);constructor(){}create(e){return Vv(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),YP=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],ZP=new y("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(ce);return()=>pc(t)}}),as=(()=>{class t{elementRef=d(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),cS=new y("cdk-connected-overlay-default-config"),df=(()=>{class t{_dir=d(Tt,{optional:!0});_injector=d(ce);_overlayRef;_templatePortal;_backdropSubscription=oe.EMPTY;_attachSubscription=oe.EMPTY;_detachSubscription=oe.EMPTY;_positionSubscription=oe.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=d(ZP);_ngZone=d(U);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new j;positionChange=new j;attach=new j;detach=new j;overlayKeydown=new j;overlayOutsideClick=new j;constructor(){let e=d(Ge),i=d(tt),r=d(cS,{optional:!0}),o=d(gc,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Sr(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=YP);let e=this._overlayRef=Vv(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!Cn(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=Mt(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new hc({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Lv(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof as?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof as?this.origin.elementRef.nativeElement:this.origin instanceof O?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Gf(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",L],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",L],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",L],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",L],push:[2,"cdkConnectedOverlayPush","push",L],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",L],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",L],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Ue]})}return t})(),Bv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({providers:[lS],imports:[Ce,PD,ic,ic]})}return t})();var dS=(()=>{class t{_animationsDisabled=dt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&$("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var KP=["text"],XP=[[["mat-icon"]],"*"],JP=["mat-icon","*"];function eL(t,n){if(t&1&&ne(0,"mat-pseudo-checkbox",1),t&2){let e=w();Z("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function tL(t,n){if(t&1&&ne(0,"mat-pseudo-checkbox",3),t&2){let e=w();Z("disabled",e.disabled)}}function nL(t,n){if(t&1&&(m(0,"span",4),p(1),f()),t&2){let e=w();v(),Oe("(",e.group.label,")")}}var Uv=new y("MAT_OPTION_PARENT_COMPONENT"),Hv=new y("MatOptgroup");var jv=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Tr=(()=>{class t{_element=d(O);_changeDetectorRef=d(Qe);_parent=d(Uv,{optional:!0});group=d(Hv,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(_t).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=D(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new j;_text;_stateChanges=new M;constructor(){let e=d(gt);e.load(zn),e.load(Kl),this._signalDisableRipple=!!this._parent&&oi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Cn(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new jv(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&lt(KP,7),i&2){let o;A(o=N())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&R("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(Ln("id",r.id),me("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),$("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",L]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:JP,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(xe(XP),F(0,eL,1,2,"mat-pseudo-checkbox",1),z(1),m(2,"span",2,0),z(4,1),f(),F(5,tL,1,1,"mat-pseudo-checkbox",3),F(6,nL,2,1,"span",4),ne(7,"div",5)),i&2&&(P(r.multiple?0:-1),v(5),P(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),v(),P(r.group&&r.group._inert?6:-1),v(),Z("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[dS,oc],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();function uS(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function mS(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var uf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Ce]})}return t})();var zv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Mr,uf,Tr,Ce]})}return t})();var iL=["trigger"],rL=["panel"],oL=[[["mat-select-trigger"]],"*"],aL=["mat-select-trigger","*"];function sL(t,n){if(t&1&&(m(0,"span",4),p(1),f()),t&2){let e=w();v(),_e(e.placeholder)}}function lL(t,n){t&1&&z(0)}function cL(t,n){if(t&1&&(m(0,"span",11),p(1),f()),t&2){let e=w(2);v(),_e(e.triggerValue)}}function dL(t,n){if(t&1&&(m(0,"span",5),F(1,lL,1,0)(2,cL,2,1,"span",11),f()),t&2){let e=w();v(),P(e.customTrigger?1:2)}}function uL(t,n){if(t&1){let e=Ie();m(0,"div",12,1),R("keydown",function(r){G(e);let o=w();return q(o._handleKeydown(r))}),z(2,1),f()}if(t&2){let e=w();ct(e.panelClass),$("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),me("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var mL=new y("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(ce);return()=>pc(t)}}),fL=new y("MAT_SELECT_CONFIG"),hL=new y("MatSelectTrigger"),$v=class{source;value;constructor(n,e){this.source=n,this.value=e}},mf=(()=>{class t{_viewportRuler=d(Gn);_changeDetectorRef=d(Qe);_elementRef=d(O);_dir=d(Tt,{optional:!0});_idGenerator=d(_t);_renderer=d(ze);_parentFormField=d(uc,{optional:!0});ngControl=d(Gi,{self:!0,optional:!0});_liveAnnouncer=d(iv);_defaultOptions=d(fL,{optional:!0});_animationsDisabled=dt();_popoverLocation;_initialized=new M;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=uS(e,this.options,this.optionGroups),a=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=mS(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new $v(this,e)}_scrollStrategyFactory=d(mL);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new M;_errorStateTracker;stateChanges=new M;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=D(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Na.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ur(()=>{let e=this.options;return e?e.changes.pipe(Et(e),it(()=>At(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(it(()=>this.optionSelectionChanges))});openedChange=new j;_openedStream=this.openedChange.pipe(Ne(e=>e),ue(()=>{}));_closedStream=this.openedChange.pipe(Ne(e=>!e),ue(()=>{}));selectionChange=new j;valueChange=new j;constructor(){let e=d(is),i=d(qi,{optional:!0}),r=d(Wl,{optional:!0}),o=d(new Bn("tabindex"),{optional:!0}),a=d(gc,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new rs(e,this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new cc(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(we(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(we(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(Et(null),we(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Jt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&sv(this._trackedModal,"aria-owns",i),eE(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;sv(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,a=this._keyManager;if(!a.isTyping()&&o&&!Cn(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,a=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&i.activeItem&&!Cn(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==s&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Cn(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof as?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new nc(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=At(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(we(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),At(...this.options.map(i=>i._stateChanges)).pipe(we(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=Mt(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-select"]],contentQueries:function(i,r,o){if(i&1&&Ze(o,hL,5)(o,Tr,5)(o,Hv,5),i&2){let a;A(a=N())&&(r.customTrigger=a.first),A(a=N())&&(r.options=a),A(a=N())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&lt(iL,5)(rL,5)(df,5),i&2){let o;A(o=N())&&(r.trigger=o.first),A(o=N())&&(r.panel=o.first),A(o=N())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,r){i&1&&R("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),i&2&&(me("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),$("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",L],disableRipple:[2,"disableRipple","disableRipple",L],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:vn(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",L],placeholder:"placeholder",required:[2,"required","required",L],multiple:[2,"multiple","multiple",L],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",L],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",vn],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",L]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[pe([{provide:dc,useExisting:t},{provide:Uv,useExisting:t}]),Ue],ngContentSelectors:aL,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,r){if(i&1&&(xe(oL),m(0,"div",2,0),R("click",function(){return r.open()}),m(3,"div",3),F(4,sL,2,1,"span",4)(5,dL,3,1,"span",5),f(),m(6,"div",6)(7,"div",7),ea(),m(8,"svg",8),ne(9,"path",9),f()()()(),se(10,uL,3,16,"ng-template",10),R("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),i&2){let o=qe(1);v(3),me("id",r._valueId),v(),P(r.empty?4:5),v(6),Z("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[as,df],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return t})();var ss=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Bv,zv,Ce,Wm,Wt,zv]})}return t})();var yi=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=$t(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=$t(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(me("aria-orientation",r.vertical?"vertical":"horizontal"),$("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})(),Sn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Ce]})}return t})();function hS(t){return Error(`Unable to find icon with the name "${t}"`)}function pL(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function pS(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function gS(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Yi=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},vS=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Yi(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(ht.HTML,r);if(!a)throw gS(r);let s=vo(a);return this._addSvgIconConfig(e,i,new Yi("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Yi(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(ht.HTML,i);if(!o)throw gS(i);let a=vo(o);return this._addSvgIconSetConfig(e,new Yi("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(ht.RESOURCE_URL,e);if(!i)throw pS(e);let r=this._cachedIconsByUrl.get(i);return r?W(ff(r)):this._loadSvgIconFromConfig(new Yi(e,null)).pipe(Ve(o=>this._cachedIconsByUrl.set(i,o)),ue(o=>ff(o)))}getNamedSvgIcon(e,i=""){let r=_S(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):xs(hS(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?W(ff(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ue(i=>ff(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return W(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ut(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(ht.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),W(null)})));return Ds(o).pipe(ue(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw hS(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Ve(i=>e.svgText=i),ue(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?W(null):this._fetchIcon(e).pipe(Ve(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(vo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(vo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw pL();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(ht.RESOURCE_URL,i);if(!a)throw pS(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(ue(c=>vo(c)),or(()=>this._inProgressUrlFetches.delete(a)),Ss());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(_S(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return gL(o)?new Yi(o.url,null,o.options):new Yi(o,null)}}static \u0275fac=function(i){return new(i||t)(H(Ct,8),H(yl),H(ee,8),H(Lt))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ff(t){return t.cloneNode(!0)}function _S(t,n){return t+":"+n}function gL(t){return!!(t.url&&t.options)}var _L=["*"],vL=new y("MAT_ICON_DEFAULT_OPTIONS"),bL=new y("mat-icon-location",{providedIn:"root",factory:()=>{let t=d(ee),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),bS=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],yL=bS.map(t=>`[${t}]`).join(", "),wL=/^url\(['"]?#(.*?)['"]?\)$/,wi=(()=>{class t{_elementRef=d(O);_iconRegistry=d(vS);_location=d(bL);_errorHandler=d(Lt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=oe.EMPTY;constructor(){let e=d(new Bn("aria-hidden"),{optional:!0}),i=d(vL,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(yL),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)bS.forEach(a=>{let s=i[o],l=s.getAttribute(a),c=l?l.match(wL):null;if(c){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(Jt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(me("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),ct(r.color?"mat-"+r.color:""),$("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",L],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:_L,decls:1,vars:0,template:function(i,r){i&1&&(xe(),z(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ci=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Ce]})}return t})();var CL=["*"],xL=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,DL=["unscopedContent"],EL=["text"],SL=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],IL=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var ML=new y("ListOption"),To=(()=>{class t{_elementRef=d(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),ko=(()=>{class t{_elementRef=d(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),Gv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),yS=(()=>{class t{_listOption=d(ML,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,hostVars:4,hostBindings:function(i,r){i&2&&$("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),TL=(()=>{class t extends yS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[X]})}return t})(),Ro=(()=>{class t extends yS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[X]})}return t})(),kL=new y("MAT_LIST_CONFIG"),Wv=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=$t(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set($t(e))}_disabled=D(!1);_defaultOptions=d(kL,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,hostVars:1,hostBindings:function(i,r){i&2&&me("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),RL=(()=>{class t{_elementRef=d(O);_ngZone=d(U);_listBase=d(Wv,{optional:!0});_platform=d(Ae);_hostElement;_isButtonElement;_noopAnimations=dt();_avatars;_icons;set lines(e){this._explicitLines=bo(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=$t(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set($t(e))}_disabled=D(!1);_subscriptions=new oe;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(gt).load(zn);let e=d(Ir,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Do(this,this._ngZone,this._hostElement,this._platform,d(ce)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(At(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,contentQueries:function(i,r,o){if(i&1&&Ze(o,TL,4)(o,Ro,4),i&2){let a;A(a=N())&&(r._avatars=a),A(a=N())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(me("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),$("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var ls=(()=>{class t extends Wv{static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275cmp=V({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[pe([{provide:Wv,useExisting:t}]),X],ngContentSelectors:CL,decls:1,vars:0,template:function(i,r){i&1&&(xe(),z(0))},styles:[xL],encapsulation:2,changeDetection:0})}return t})(),cs=(()=>{class t extends RL{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=$t(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275cmp=V({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Ze(o,ko,5)(o,To,5)(o,Gv,5),i&2){let a;A(a=N())&&(r._lines=a),A(a=N())&&(r._titles=a),A(a=N())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&lt(DL,5)(EL,5),i&2){let o;A(o=N())&&(r._unscopedContent=o.first),A(o=N())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(me("aria-current",r._getAriaCurrent()),$("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[X],ngContentSelectors:IL,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(xe(SL),z(0),m(1,"span",1),z(2,1),z(3,2),m(4,"span",2,0),R("cdkObserveContent",function(){return r._updateItemLines(!0)}),z(6,3),f()(),z(7,4),z(8,5),ne(9,"div",3))},dependencies:[Lm],encapsulation:2,changeDetection:0})}return t})();var ds=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Vm,Mr,uf,Ce,Sn]})}return t})();var wS=()=>["name","faculty","uni","ola","status"],AL=(t,n)=>n.id,NL=(t,n)=>n.olaNo;function OL(t,n){if(t&1){let e=Ie();m(0,"div",2)(1,"mat-form-field",38)(2,"mat-label"),p(3,"New Password"),f(),m(4,"input",39),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.newPassword,r)||(o.newPassword=r),q(r)}),f()(),m(5,"mat-form-field",38)(6,"mat-label"),p(7,"Confirm Password"),f(),m(8,"input",39),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.confirmPassword,r)||(o.confirmPassword=r),q(r)}),f()(),m(9,"div",40)(10,"button",41),R("click",function(){G(e);let r=w();return q(r.onChangePassword())}),p(11,"Update"),f(),m(12,"button",42),R("click",function(){G(e);let r=w();return q(r.cancelChangePassword())}),p(13,"Cancel"),f()()()}if(t&2){let e=w();v(4),Me("ngModel",e.newPassword),v(4),Me("ngModel",e.confirmPassword)}}function FL(t,n){if(t&1){let e=Ie();m(0,"div",3)(1,"button",43),R("click",function(){G(e);let r=w();return q(r.startChangePassword())}),m(2,"mat-icon"),p(3,"key"),f(),p(4," Change Password "),f(),m(5,"button",44),R("click",function(){G(e);let r=w();return q(r.logout())}),m(6,"mat-icon"),p(7,"logout"),f(),p(8," Logout "),f()()}}function PL(t,n){if(t&1&&(m(0,"div",5)(1,"mat-icon"),p(2,"error"),f(),p(3),f()),t&2){let e=w();v(3),Oe(" ",e.errorMessage()," ")}}function LL(t,n){if(t&1&&(m(0,"strong"),p(1),f(),p(2)),t&2){let e,i,r=w(2);v(),Oe("#",(e=r.studentProfile())==null||e.olaAgreement==null?null:e.olaAgreement.olaNo),v(),Oe(" - ",(i=r.studentProfile())==null||i.olaAgreement==null?null:i.olaAgreement.name," ")}}function VL(t,n){t&1&&p(0," Not Assigned ")}function BL(t,n){if(t&1&&(m(0,"mat-card",9)(1,"mat-card-content")(2,"div",45)(3,"div",46)(4,"span",47),p(5,"Username:"),f(),m(6,"span",48),p(7),f()(),m(8,"div",46)(9,"span",47),p(10,"Faculty:"),f(),m(11,"span",48),p(12),f()(),m(13,"div",46)(14,"span",47),p(15,"Destination University:"),f(),m(16,"span",48),p(17),f()(),m(18,"div",46)(19,"span",47),p(20,"OLA Agreement:"),f(),m(21,"span",48),F(22,LL,3,2)(23,VL,1,0),f()(),ne(24,"mat-divider"),m(25,"div",49)(26,"span",47),p(27,"Calculated Points:"),f(),m(28,"span",50),p(29),f()(),m(30,"div",49)(31,"span",47),p(32,"OLA Status:"),f(),m(33,"span",51),p(34),f()()()()()),t&2){let e,i,r,o,a,s,l,c=w();v(7),_e((e=c.studentProfile())==null||e.user==null?null:e.user.username),v(5),_e(((i=c.studentProfile())==null||i.faculty==null?null:i.faculty.name)||"Not Assigned"),v(5),_e(((r=c.studentProfile())==null||r.destUni==null?null:r.destUni.name)||"Not Selected"),v(5),P((o=c.studentProfile())!=null&&o.olaAgreement?22:23),v(7),_e((a=c.studentProfile())==null?null:a.points),v(4),ct((s=c.studentProfile())==null?null:s.olaStatus),v(),Oe(" ",((l=c.studentProfile())==null?null:l.olaStatus)||"Not Set"," ")}}function jL(t,n){t&1&&(m(0,"div",10),p(1,"Loading your profile..."),f())}function UL(t,n){t&1&&(m(0,"th",52),p(1,"Name"),f())}function HL(t,n){t&1&&(m(0,"span",54),p(1,"(You)"),f())}function zL(t,n){if(t&1&&(m(0,"td",53),p(1),F(2,HL,2,0,"span",54),f()),t&2){let e=n.$implicit,i=w();Ut("font-weight",(e.user==null?null:e.user.username)===i.tokenStorage.getUsername()?"bold":"normal"),v(),Oe(" ",e.user==null?null:e.user.username," "),v(),P((e.user==null?null:e.user.username)===i.tokenStorage.getUsername()?2:-1)}}function $L(t,n){t&1&&(m(0,"th",52),p(1,"Faculty"),f())}function WL(t,n){if(t&1&&(m(0,"td",53),p(1),f()),t&2){let e=n.$implicit;v(),_e((e.faculty==null?null:e.faculty.name)||"N/A")}}function GL(t,n){t&1&&(m(0,"th",52),p(1,"Destination"),f())}function qL(t,n){if(t&1&&(m(0,"td",53),p(1),f()),t&2){let e=n.$implicit;v(),_e((e.destUni==null?null:e.destUni.name)||"N/A")}}function QL(t,n){t&1&&(m(0,"th",52),p(1,"OLA Agreement"),f())}function YL(t,n){if(t&1&&p(0),t&2){let e=w().$implicit;Vn(" #",e.olaAgreement.olaNo," - ",e.olaAgreement.name," ")}}function ZL(t,n){t&1&&p(0," N/A ")}function KL(t,n){if(t&1&&(m(0,"td",53),F(1,YL,1,2)(2,ZL,1,0),f()),t&2){let e=n.$implicit;v(),P(e.olaAgreement?1:2)}}function XL(t,n){t&1&&(m(0,"th",52),p(1,"Status"),f())}function JL(t,n){if(t&1&&(m(0,"td",53)(1,"span",55),p(2),f()()),t&2){let e=n.$implicit;v(),ct(e.olaStatus),v(),Oe(" ",e.olaStatus||"Not Set"," ")}}function e2(t,n){t&1&&ne(0,"tr",56)}function t2(t,n){if(t&1&&ne(0,"tr",57),t&2){let e=n.$implicit,i=w();Ut("background-color",(e.user==null?null:e.user.username)===i.tokenStorage.getUsername()?"rgba(63, 81, 181, 0.05)":"transparent")}}function n2(t,n){if(t&1&&(m(0,"mat-card",33)(1,"mat-card-content")(2,"span",58),p(3,"Estimated Total Points:"),f(),m(4,"div",59),p(5),f(),ne(6,"mat-divider"),m(7,"p",60),p(8,"Formula: English + Subjective + Sem 2 + Sem 3"),f()()()),t&2){let e=w();v(5),_e(e.calcResult())}}function i2(t,n){t&1&&(m(0,"div",34)(1,"mat-icon"),p(2,"calculate"),f(),m(3,"p"),p(4,"Enter your details and click calculate to see your estimated score."),f()())}function r2(t,n){if(t&1&&(m(0,"mat-list-item")(1,"mat-icon",63),p(2,"description"),f(),m(3,"div",64),p(4),f(),m(5,"div",65),p(6),f()()),t&2){let e=n.$implicit;v(4),Oe("#",e.olaNo),v(2),_e(e.name)}}function o2(t,n){t&1&&(m(0,"div",62),p(1,"No agreements available for this university."),f())}function a2(t,n){if(t&1&&(m(0,"mat-card",37)(1,"mat-card-header")(2,"mat-card-title"),p(3),f(),m(4,"mat-card-subtitle"),p(5),f()(),m(6,"mat-card-content"),ne(7,"mat-divider"),m(8,"h5",61),p(9,"Available OLA Agreements:"),f(),m(10,"mat-list"),bt(11,r2,7,2,"mat-list-item",null,NL,!1,o2,2,0,"div",62),f()()()),t&2){let e=n.$implicit,i=w();v(3),_e(e.name),v(2),Vn("",e.city,", ",e.country),v(6),yt(i.getAgreementsForUni(e.id))}}function s2(t,n){t&1&&(m(0,"p"),p(1,"Searching for universities..."),f())}var hf=class t{board=D("");errorMessage=D("");currentView=D("profile");studentProfile=D(null);students=D([]);universities=D([]);olaAgreements=D([]);calcSem2=D(2);calcSem3=D(2);calcEnglish=D(0);calcSubjective=D(3);calcResult=D(null);isChangingPassword=D(!1);newPassword=D("");confirmPassword=D("");userService=d(xr);studentService=d(Fa);platformId=d(jt);tokenStorage=d(Dt);http=d(Ct);ngOnInit(){ai(this.platformId)&&(this.loadProfile(),this.loadUniversities(),this.loadOlaAgreements(),this.loadStudents())}loadProfile(){this.studentService.getMyProfile().subscribe({next:n=>{this.studentProfile.set(n)},error:n=>{this.errorMessage.set(`Failed to load profile: ${n.status}`)}})}loadStudents(){this.studentService.getStudents().subscribe({next:n=>{this.students.set(n)},error:n=>{this.errorMessage.set(`Failed to load student list: ${n.status}`)}})}loadUniversities(){this.http.get("http://localhost:8080/universities").subscribe(n=>{this.universities.set(n)})}loadOlaAgreements(){this.http.get("http://localhost:8080/ola-agreements").subscribe(n=>{this.olaAgreements.set(n)})}getAgreementsForUni(n){return this.olaAgreements().filter(e=>e.destUnis&&e.destUnis.some(i=>i.id===n))}calculatePoints(){let n=this.calcSem2(),e=this.calcSem3(),i=this.calcEnglish(),r=this.calcSubjective();if(n<2||n>5||e<2||e>5){alert("Semester averages must be between 2.0 and 5.0");return}if(i<0||i>11){alert("English points must be between 0 and 11");return}if(r<3||r>5){alert("Subjective grade must be between 3 and 5");return}let o=i+r+n+e;this.calcResult.set(Number(o.toFixed(2)))}setView(n){this.currentView.set(n),n==="universities"?(this.loadUniversities(),this.loadOlaAgreements()):n==="allStudents"&&this.loadStudents()}logout(){this.tokenStorage.signOut(),window.location.reload()}startChangePassword(){this.isChangingPassword.set(!0)}cancelChangePassword(){this.isChangingPassword.set(!1),this.newPassword.set(""),this.confirmPassword.set("")}onChangePassword(){if(this.newPassword()!==this.confirmPassword()){alert("Passwords do not match");return}if(this.newPassword().length<6){alert("Password must be at least 6 characters");return}this.http.post("http://localhost:8080/auth/change-password",{newPassword:this.newPassword()}).subscribe({next:()=>{alert("Password changed successfully! Please login again."),this.logout()},error:n=>{alert("Failed to change password")}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-user"]],decls:88,vars:15,consts:[[1,"user-dashboard"],[1,"account-card"],[1,"password-form"],[1,"account-info"],[1,"dashboard-content"],[1,"error-banner"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","0ms"],["label","My Profile"],[1,"tab-padding"],[1,"summary-card"],[1,"loading-spinner"],["label","Student Directory"],["mat-table","",1,"mat-elevation-z1","directory-table",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"font-weight",4,"matCellDef"],["matColumnDef","faculty"],["mat-cell","",4,"matCellDef"],["matColumnDef","uni"],["matColumnDef","ola"],["matColumnDef","status"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"background-color",4,"matRowDef","matRowDefColumns"],["label","Points Calculator"],[1,"calculator-container"],[1,"calc-form-card"],[1,"calc-form"],["appearance","fill"],["matInput","","type","number","step","0.1","min","2","max","5",3,"ngModelChange","ngModel"],["matInput","","type","number","min","0","max","11",3,"ngModelChange","ngModel"],["matInput","","type","number","min","3","max","5",3,"ngModelChange","ngModel"],["mat-raised-button","","color","primary",1,"calc-button",3,"click"],[1,"calc-result-area"],[1,"result-card","mat-elevation-z4"],[1,"calc-placeholder"],["label","University Agreements"],[1,"uni-grid"],[1,"uni-card","mat-elevation-z2"],["appearance","outline",1,"full-width"],["matInput","","type","password",3,"ngModelChange","ngModel"],[1,"form-actions"],["mat-raised-button","","color","accent",3,"click"],["mat-button","",3,"click"],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","warn",3,"click"],[1,"profile-grid"],[1,"profile-item"],[1,"label"],[1,"value"],[1,"profile-item","highlight"],[1,"value","points"],[1,"value","status"],["mat-header-cell",""],["mat-cell",""],[1,"you-badge"],[1,"status-chip"],["mat-header-row",""],["mat-row",""],[1,"result-label"],[1,"result-value"],[1,"result-formula"],[1,"ola-title"],[1,"empty-list"],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""]],template:function(e,i){e&1&&(m(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title")(4,"mat-icon"),p(5,"account_circle"),f(),p(6),f(),m(7,"mat-card-subtitle"),p(8,"Student Account"),f()(),m(9,"mat-card-content"),F(10,OL,14,2,"div",2)(11,FL,9,0,"div",3),f()(),m(12,"div",4),F(13,PL,4,1,"div",5),m(14,"mat-tab-group",6)(15,"mat-tab",7)(16,"div",8)(17,"h3"),p(18,"My Erasmus Summary"),f(),F(19,BL,35,8,"mat-card",9)(20,jL,2,0,"div",10),f()(),m(21,"mat-tab",11)(22,"div",8)(23,"h3"),p(24,"Erasmus Participants"),f(),m(25,"table",12),Ee(26,13),se(27,UL,2,0,"th",14)(28,zL,3,4,"td",15),Se(),Ee(29,16),se(30,$L,2,0,"th",14)(31,WL,2,1,"td",17),Se(),Ee(32,18),se(33,GL,2,0,"th",14)(34,qL,2,1,"td",17),Se(),Ee(35,19),se(36,QL,2,0,"th",14)(37,KL,3,1,"td",17),Se(),Ee(38,20),se(39,XL,2,0,"th",14)(40,JL,3,3,"td",17),Se(),se(41,e2,1,0,"tr",21)(42,t2,1,2,"tr",22),f()()(),m(43,"mat-tab",23)(44,"div",8)(45,"h3"),p(46,"Self-Service Points Estimator"),f(),m(47,"div",24)(48,"mat-card",25)(49,"mat-card-content")(50,"div",26)(51,"mat-form-field",27)(52,"mat-label"),p(53,"Avg from 2nd Semester"),f(),m(54,"input",28),Te("ngModelChange",function(o){return ke(i.calcSem2,o)||(i.calcSem2=o),o}),f(),m(55,"mat-hint"),p(56,"Range: 2.0 - 5.0"),f()(),m(57,"mat-form-field",27)(58,"mat-label"),p(59,"Avg from 3rd Semester"),f(),m(60,"input",28),Te("ngModelChange",function(o){return ke(i.calcSem3,o)||(i.calcSem3=o),o}),f(),m(61,"mat-hint"),p(62,"Range: 2.0 - 5.0"),f()(),m(63,"mat-form-field",27)(64,"mat-label"),p(65,"English Test Points"),f(),m(66,"input",29),Te("ngModelChange",function(o){return ke(i.calcEnglish,o)||(i.calcEnglish=o),o}),f(),m(67,"mat-hint"),p(68,"Maximum: 11 pts"),f()(),m(69,"mat-form-field",27)(70,"mat-label"),p(71,"Subjective Grade"),f(),m(72,"input",30),Te("ngModelChange",function(o){return ke(i.calcSubjective,o)||(i.calcSubjective=o),o}),f(),m(73,"mat-hint"),p(74,"Range: 3 - 5"),f()(),m(75,"button",31),R("click",function(){return i.calculatePoints()}),p(76," Calculate Score "),f()()()(),m(77,"div",32),F(78,n2,9,1,"mat-card",33)(79,i2,5,0,"div",34),f()()()(),m(80,"mat-tab",35)(81,"div",8)(82,"h3"),p(83,"Explore Erasmus Destinations"),f(),m(84,"div",36),bt(85,a2,14,4,"mat-card",37,AL,!1,s2,2,0,"p"),f()()()()()()),e&2&&(v(6),Oe(" ",i.tokenStorage.getUsername()," "),v(4),P(i.isChangingPassword()?10:11),v(3),P(i.errorMessage()?13:-1),v(6),P(i.studentProfile()?19:20),v(6),Z("dataSource",i.students()),v(16),Z("matHeaderRowDef",Qt(13,wS)),v(),Z("matRowDefColumns",Qt(14,wS)),v(12),Me("ngModel",i.calcSem2),v(6),Me("ngModel",i.calcSem3),v(6),Me("ngModel",i.calcEnglish),v(6),Me("ngModel",i.calcSubjective),v(6),P(i.calcResult()!==null?78:79),v(7),yt(i.universities()))},dependencies:[ui,wn,_o,di,ql,Gl,Hn,Yt,Ua,So,ja,_i,mi,hi,gi,pi,fi,Ja,za,Wa,Ya,Ga,$a,Za,qa,Qa,Ka,Xa,bi,vi,un,Kt,es,En,Dn,Wt,ss,Sn,yi,Ci,wi,ds,ls,cs,Ro,ko,To],styles:[".user-dashboard[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px}.account-card[_ngcontent-%COMP%]{margin-bottom:30px;border-top:4px solid #3f51b5}.account-info[_ngcontent-%COMP%]{display:flex;gap:15px;margin-top:10px}.password-form[_ngcontent-%COMP%]{max-width:400px;display:flex;flex-direction:column;gap:10px}.form-actions[_ngcontent-%COMP%]{display:flex;gap:10px;margin-top:10px}.tab-padding[_ngcontent-%COMP%]{padding:25px 0}.summary-card[_ngcontent-%COMP%]{max-width:700px;border-radius:12px}.profile-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:20px;padding:10px 0}.profile-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.profile-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:500;color:#666}.profile-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.1rem}.profile-item.highlight[_ngcontent-%COMP%]{padding:10px;background-color:#f0f2f5;border-radius:8px}.points[_ngcontent-%COMP%]{font-size:1.5rem!important;font-weight:700;color:#2e7d32}.status[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase}.status.SENT[_ngcontent-%COMP%]{color:#1976d2}.status.SIGNED[_ngcontent-%COMP%]{color:#2e7d32}.status.REJECTED[_ngcontent-%COMP%]{color:#d32f2f}.status.PENDING[_ngcontent-%COMP%]{color:#ed6c02}.directory-table[_ngcontent-%COMP%]{width:100%}.you-badge[_ngcontent-%COMP%]{font-size:.8rem;background-color:#3f51b5;color:#fff;padding:2px 8px;border-radius:12px;margin-left:8px}.status-chip[_ngcontent-%COMP%]{display:inline-block;padding:4px 12px;border-radius:16px;font-size:.85rem;font-weight:500;background-color:#eee}.status-chip.SENT[_ngcontent-%COMP%]{background-color:#e3f2fd;color:#1976d2}.status-chip.SIGNED[_ngcontent-%COMP%]{background-color:#e8f5e9;color:#2e7d32}.status-chip.REJECTED[_ngcontent-%COMP%]{background-color:#ffebee;color:#d32f2f}.calculator-container[_ngcontent-%COMP%]{display:flex;gap:40px;align-items:stretch;flex-wrap:wrap}.calc-form-card[_ngcontent-%COMP%]{flex:1;min-width:300px}.calc-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.calc-button[_ngcontent-%COMP%]{height:50px;font-size:1.1rem}.calc-result-area[_ngcontent-%COMP%]{flex:1;min-width:300px;display:flex}.result-card[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;text-align:center;background-color:#f1f8e9;border:2px solid #c5e1a5}.result-label[_ngcontent-%COMP%]{font-size:1.2rem;color:#555}.result-value[_ngcontent-%COMP%]{font-size:5rem;font-weight:900;color:#2e7d32;margin:20px 0}.result-formula[_ngcontent-%COMP%]{margin-top:15px;color:#777;font-style:italic}.calc-placeholder[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;border:2px dashed #ccc;border-radius:8px;color:#999}.calc-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;margin-bottom:15px}.uni-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:25px}.uni-card[_ngcontent-%COMP%]{border-top:3px solid #3f51b5}.ola-title[_ngcontent-%COMP%]{margin:15px 0 10px;color:#555}.empty-list[_ngcontent-%COMP%]{padding:10px;font-style:italic;color:#999}.loading-spinner[_ngcontent-%COMP%]{padding:40px;text-align:center;color:#666}.error-banner[_ngcontent-%COMP%]{background-color:#ffebee;color:#d32f2f;padding:15px;border-radius:4px;margin-bottom:20px;display:flex;align-items:center;gap:10px}@media(max-width:768px){.calculator-container[_ngcontent-%COMP%]{flex-direction:column}}"]})};var CS=(t,n)=>{let e=d(Dt),i=d(dn);for(let r=0;r<t.data.roles.length;r++)for(let o=0;o<e.getAuthorities().length;o++)if(t.data.roles[r]===e.getAuthorities()[o])return!0;return i.parseUrl("")};var pf=class{username;password;constructor(n,e){this.username=n,this.password=e}};var xS={headers:new Zt({"Content-Type":"application/json"})},us=class t{constructor(n){this.http=n}loginUrl="http://localhost:8080/auth/signin";signupUrl="http://localhost:8080/auth/signup";attemptAuth(n){return this.http.post(this.loginUrl,n,xS)}signUp(n){return this.http.post(this.signupUrl,n,xS)}static \u0275fac=function(e){return new(e||t)(H(Ct))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};function l2(t,n){if(t&1){let e=Ie();m(0,"div",5)(1,"h3"),p(2,"Password Reset Required"),f(),m(3,"p"),p(4,"Please set a new password to secure your account."),f(),m(5,"mat-form-field",7)(6,"mat-label"),p(7,"New Password"),f(),m(8,"input",8),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.newPassword,r)||(o.newPassword=r),q(r)}),f(),m(9,"mat-icon",9),p(10,"lock"),f()(),m(11,"mat-form-field",7)(12,"mat-label"),p(13,"Confirm Password"),f(),m(14,"input",10),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.confirmPassword,r)||(o.confirmPassword=r),q(r)}),f(),m(15,"mat-icon",9),p(16,"verified_user"),f()(),m(17,"div",11)(18,"button",12),R("click",function(){G(e);let r=w();return q(r.onChangePassword())}),p(19,"Update Password"),f()()()}if(t&2){let e=w();v(8),Me("ngModel",e.newPassword),v(6),Me("ngModel",e.confirmPassword)}}function c2(t,n){if(t&1){let e=Ie();m(0,"div",6)(1,"mat-icon",13),p(2,"check_circle"),f(),m(3,"h3"),p(4),f(),m(5,"p"),p(6,"You are currently authenticated."),f(),m(7,"div",14)(8,"button",12),R("click",function(){G(e);let r=w();return q(r.redirectToPanel())}),p(9," Go to Dashboard "),f(),m(10,"button",15),R("click",function(){G(e);let r=w();return r.tokenStorage.signOut(),q(r.reloadPage())}),p(11," Logout "),f()()()}if(t&2){let e=w();v(4),Oe("Welcome back, ",e.username(),"!")}}function d2(t,n){t&1&&(m(0,"mat-error"),p(1,"Username is required"),f())}function u2(t,n){t&1&&(m(0,"mat-error"),p(1,"Password is required"),f())}function m2(t,n){if(t&1&&(m(0,"div",19)(1,"mat-icon"),p(2,"error"),f(),p(3),f()),t&2){let e=w(2);v(3),Oe(" Login failed: ",e.errorMessage()," ")}}function f2(t,n){if(t&1){let e=Ie();m(0,"form",16,0),R("ngSubmit",function(){G(e);let r=qe(1),o=w();return q(r.form.valid&&o.onSubmit())}),m(2,"mat-form-field",7)(3,"mat-label"),p(4,"Username"),f(),m(5,"input",17,1),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.form.username,r)||(o.form.username=r),q(r)}),f(),m(7,"mat-icon",9),p(8,"person"),f(),F(9,d2,2,0,"mat-error"),f(),m(10,"mat-form-field",7)(11,"mat-label"),p(12,"Password"),f(),m(13,"input",18,2),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.form.password,r)||(o.form.password=r),q(r)}),f(),m(15,"mat-icon",9),p(16,"key"),f(),F(17,u2,2,0,"mat-error"),f(),F(18,m2,4,1,"div",19),m(19,"button",20),p(20," Login "),f()(),ne(21,"mat-divider"),m(22,"div",21)(23,"p"),p(24,"Don't have an account yet?"),f(),m(25,"button",22),p(26," Create an Account "),f()()}if(t&2){let e=qe(1),i=qe(6),r=qe(14),o=w();v(5),Me("ngModel",o.form.username),v(4),P(e.submitted&&(i.errors!=null&&i.errors.required)?9:-1),v(4),Me("ngModel",o.form.password),v(4),P(e.submitted&&(r.errors!=null&&r.errors.required)?17:-1),v(),P(e.submitted&&o.isLoginFailed()?18:-1)}}var gf=class t{form={};token;isLoggedIn=D(!1);isLoginFailed=D(!1);isResetRequired=D(!1);errorMessage=D("");roles=[];username=D("");newPassword=D("");confirmPassword=D("");authService=d(us);tokenStorage=d(Dt);router=d(dn);http=d(Ct);ngOnInit(){this.tokenStorage.getToken()!=null&&this.tokenStorage.getToken()!="{}"&&(this.username.set(this.tokenStorage.getUsername()),this.tokenStorage.getResetRequired()?this.isResetRequired.set(!0):(this.isLoggedIn.set(!0),this.roles=this.tokenStorage.getAuthorities()))}redirectToPanel(){this.roles.includes("ROLE_ADMIN")?this.router.navigate(["/admin"]):this.roles.includes("ROLE_MODERATOR")?this.router.navigate(["/mod"]):this.roles.includes("ROLE_USER")?this.router.navigate(["/user"]):this.reloadPage()}onSubmit(){let n=new pf(this.form.username,this.form.password);this.authService.attemptAuth(n).subscribe({next:e=>{this.tokenStorage.saveToken(e.accessToken||"{}"),this.tokenStorage.saveUsername(e.username||"{}"),this.tokenStorage.saveAuthorities(e.authorities||[]),this.tokenStorage.saveResetRequired(e.passwordResetRequired||!1),this.username.set(e.username||""),this.isLoginFailed.set(!1),this.roles=this.tokenStorage.getAuthorities(),e.passwordResetRequired?this.isResetRequired.set(!0):(this.isLoggedIn.set(!0),this.token=this.tokenStorage.getToken(),this.redirectToPanel())},error:e=>{console.log(e),this.errorMessage.set(e.error.message||"Login failed"),this.isLoginFailed.set(!0)}})}onChangePassword(){if(this.newPassword()!==this.confirmPassword()){alert("Passwords do not match");return}if(this.newPassword().length<6){alert("Password must be at least 6 characters");return}this.http.post("http://localhost:8080/auth/change-password",{newPassword:this.newPassword()}).subscribe({next:()=>{alert("Password changed successfully! Please login again."),this.tokenStorage.signOut(),window.location.reload()},error:n=>{alert("Failed to change password")}})}startChangePassword(){this.isResetRequired.set(!0),this.isLoggedIn.set(!1)}cancelChangePassword(){this.isResetRequired.set(!1),this.isLoggedIn.set(!0)}reloadPage(){window.location.reload()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-login"]],decls:11,vars:1,consts:[["f","ngForm"],["usernameInput","ngModel"],["passwordInput","ngModel"],[1,"login-page"],[1,"login-card","mat-elevation-z8"],[1,"auth-section"],[1,"auth-section","centered"],["appearance","outline",1,"full-width"],["matInput","","type","password","placeholder","Minimum 6 characters",3,"ngModelChange","ngModel"],["matSuffix",""],["matInput","","type","password",3,"ngModelChange","ngModel"],[1,"form-actions"],["mat-raised-button","","color","primary",3,"click"],[1,"welcome-icon"],[1,"dashboard-links"],["mat-button","","color","warn",3,"click"],["name","form","novalidate","",1,"auth-form",3,"ngSubmit"],["matInput","","name","username","required","",3,"ngModelChange","ngModel"],["matInput","","type","password","name","password","required","",3,"ngModelChange","ngModel"],[1,"error-msg"],["mat-raised-button","","color","primary","type","submit",1,"login-button"],[1,"signup-prompt"],["mat-stroked-button","","color","accent","routerLink","/signup"]],template:function(e,i){e&1&&(m(0,"div",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title"),p(4,"ErasmoBoard Login"),f(),m(5,"mat-card-subtitle"),p(6,"Access your Erasmus Dashboard"),f()(),m(7,"mat-card-content"),F(8,l2,20,2,"div",5)(9,c2,12,1,"div",6)(10,f2,27,5),f()()()),e&2&&(v(8),P(i.isResetRequired()?8:i.isLoggedIn()?9:10))},dependencies:[ui,km,wn,di,Im,Ql,Hn,qi,Yt,ci,_i,mi,hi,gi,pi,fi,bi,vi,un,Kt,ts,ns,En,Dn,Wt,Ci,wi,Sn,yi],styles:[".login-page[_ngcontent-%COMP%]{height:calc(100vh - 64px);display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,#f5f7fa,#c3cfe2)}.login-card[_ngcontent-%COMP%]{width:100%;max-width:450px;padding:10px;border-radius:12px}.auth-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;margin-top:20px;margin-bottom:20px}.full-width[_ngcontent-%COMP%]{width:100%}.login-button[_ngcontent-%COMP%]{height:50px;font-size:1.1rem;margin-top:10px}.signup-prompt[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.signup-prompt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666;margin-bottom:10px}.error-msg[_ngcontent-%COMP%]{background-color:#ffebee;color:#d32f2f;padding:12px;border-radius:4px;font-size:.9rem;display:flex;align-items:center;gap:8px}.auth-section[_ngcontent-%COMP%]{padding:10px 0}.centered[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;align-items:center;gap:15px}.welcome-icon[_ngcontent-%COMP%]{font-size:64px;width:64px;height:64px;color:#4caf50}.dashboard-links[_ngcontent-%COMP%]{display:flex;gap:15px;margin-top:10px}.form-actions[_ngcontent-%COMP%]{margin-top:20px}mat-card-header[_ngcontent-%COMP%]{margin-bottom:20px}mat-divider[_ngcontent-%COMP%]{margin:10px 0}"]})};var _f=class{username;password;constructor(n,e){this.username=n,this.password=e}};function h2(t,n){t&1&&(m(0,"div",5)(1,"mat-icon",6),p(2,"task_alt"),f(),m(3,"h3"),p(4,"Account Created!"),f(),m(5,"p"),p(6,"Your registration was successful. You can now log in."),f(),m(7,"button",7),p(8," Go to Login "),f()())}function p2(t,n){t&1&&(m(0,"mat-error"),p(1,"Username is required"),f())}function g2(t,n){t&1&&(m(0,"mat-error"),p(1,"Password is required"),f())}function _2(t,n){t&1&&(m(0,"mat-error"),p(1,"Password must be at least 6 characters"),f())}function v2(t,n){if(t&1&&(m(0,"div",13)(1,"mat-icon"),p(2,"error"),f(),p(3),f()),t&2){let e=w(2);v(3),Oe(" Registration failed: ",e.errorMessage()," ")}}function b2(t,n){if(t&1){let e=Ie();m(0,"form",8,0),R("ngSubmit",function(){G(e);let r=qe(1),o=w();return q(r.form.valid&&o.onSubmit())}),m(2,"mat-form-field",9)(3,"mat-label"),p(4,"Username"),f(),m(5,"input",10,1),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.form.username,r)||(o.form.username=r),q(r)}),f(),m(7,"mat-icon",11),p(8,"person"),f(),F(9,p2,2,0,"mat-error"),f(),m(10,"mat-form-field",9)(11,"mat-label"),p(12,"Password"),f(),m(13,"input",12,2),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.form.password,r)||(o.form.password=r),q(r)}),f(),m(15,"mat-icon",11),p(16,"key"),f(),F(17,g2,2,0,"mat-error"),F(18,_2,2,0,"mat-error"),f(),F(19,v2,4,1,"div",13),m(20,"button",14),p(21," Sign Up "),f()(),ne(22,"mat-divider"),m(23,"div",15)(24,"p"),p(25,"Already have an account?"),f(),m(26,"button",16),p(27," Back to Login "),f()()}if(t&2){let e=qe(1),i=qe(6),r=qe(14),o=w();v(5),Me("ngModel",o.form.username),v(4),P(e.submitted&&(i.errors!=null&&i.errors.required)?9:-1),v(4),Me("ngModel",o.form.password),v(4),P(e.submitted&&(r.errors!=null&&r.errors.required)?17:-1),v(),P(e.submitted&&(r.errors!=null&&r.errors.minlength)?18:-1),v(),P(e.submitted&&o.isSignUpFailed()?19:-1)}}var vf=class t{form={};signupInfo;isSignedUp=D(!1);isSignUpFailed=D(!1);errorMessage=D("");authService=d(us);onSubmit(){console.log(this.form),this.signupInfo=new _f(this.form.username,this.form.password),this.authService.signUp(this.signupInfo).subscribe({next:n=>{console.log(n),this.isSignedUp.set(!0),this.isSignUpFailed.set(!1)},error:n=>{console.log(n),this.errorMessage.set(n.error.message),this.isSignUpFailed.set(!0)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-register"]],decls:10,vars:1,consts:[["f","ngForm"],["usernameInput","ngModel"],["passwordInput","ngModel"],[1,"login-page"],[1,"login-card","mat-elevation-z8"],[1,"auth-section","centered"],[1,"welcome-icon"],["mat-raised-button","","color","primary","routerLink","/auth/login"],["name","form","novalidate","",1,"auth-form",3,"ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","name","username","required","",3,"ngModelChange","ngModel"],["matSuffix",""],["matInput","","type","password","name","password","required","","minlength","6",3,"ngModelChange","ngModel"],[1,"error-msg"],["mat-raised-button","","color","primary","type","submit",1,"login-button"],[1,"signup-prompt"],["mat-stroked-button","","color","accent","routerLink","/auth/login"]],template:function(e,i){e&1&&(m(0,"div",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title"),p(4,"Create ErasmoBoard Account"),f(),m(5,"mat-card-subtitle"),p(6,"Join the Erasmus community"),f()(),m(7,"mat-card-content"),F(8,h2,9,0,"div",5)(9,b2,28,6),f()()()),e&2&&(v(8),P(i.isSignedUp()?8:9))},dependencies:[ui,km,wn,di,Im,Ql,G_,Hn,qi,Yt,ci,_i,mi,hi,gi,pi,fi,bi,vi,un,Kt,ts,ns,En,Dn,Wt,Ci,wi,Sn,yi],styles:[".login-page[_ngcontent-%COMP%]{height:calc(100vh - 64px);display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,#f5f7fa,#c3cfe2)}.login-card[_ngcontent-%COMP%]{width:100%;max-width:450px;padding:10px;border-radius:12px}.auth-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;margin-top:20px;margin-bottom:20px}.full-width[_ngcontent-%COMP%]{width:100%}.login-button[_ngcontent-%COMP%]{height:50px;font-size:1.1rem;margin-top:10px}.signup-prompt[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.signup-prompt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666;margin-bottom:10px}.error-msg[_ngcontent-%COMP%]{background-color:#ffebee;color:#d32f2f;padding:12px;border-radius:4px;font-size:.9rem;display:flex;align-items:center;gap:8px}.auth-section[_ngcontent-%COMP%]{padding:10px 0}.centered[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;align-items:center;gap:15px}.welcome-icon[_ngcontent-%COMP%]{font-size:64px;width:64px;height:64px;color:#4caf50}mat-card-header[_ngcontent-%COMP%]{margin-bottom:20px}mat-divider[_ngcontent-%COMP%]{margin:10px 0}"]})};var y2=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],w2=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function C2(t,n){t&1&&(m(0,"span",3),z(1,1),f())}function x2(t,n){t&1&&(m(0,"span",6),z(1,2),f())}var D2=["*"];var E2=new y("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),DS=new y("MatChipAvatar"),ES=new y("MatChipTrailingIcon"),SS=new y("MatChipEdit"),IS=new y("MatChipRemove"),MS=new y("MatChip"),TS=(()=>{class t{_elementRef=d(O);_parentChip=d(MS);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){d(gt).load(zn),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(me("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),$("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",L],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:vn(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),S2=(()=>{class t extends TS{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=be(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&R("click",function(a){return r._handleClick(a)})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(me("tabindex",r._getTabindex()),$("mdc-evolution-chip__action--presentational",!1))},features:[X]})}return t})();var Qv=(()=>{class t{_changeDetectorRef=d(Qe);_elementRef=d(O);_tagName=d(AC);_ngZone=d(U);_focusMonitor=d(yo);_globalRippleOptions=d(Ir,{optional:!0});_document=d(ee);_onFocus=new M;_onBlur=new M;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=dt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=d(_t).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new j;destroyed=new j;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=d(tf);_injector=d(ce);constructor(){let e=d(gt);e.load(zn),e.load(Kl),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=At(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,o){if(i&1&&Ze(o,DS,5)(o,SS,5)(o,ES,5)(o,IS,5)(o,DS,5)(o,ES,5)(o,SS,5)(o,IS,5),i&2){let a;A(a=N())&&(r.leadingIcon=a.first),A(a=N())&&(r.editIcon=a.first),A(a=N())&&(r.trailingIcon=a.first),A(a=N())&&(r.removeIcon=a.first),A(a=N())&&(r._allLeadingIcons=a),A(a=N())&&(r._allTrailingIcons=a),A(a=N())&&(r._allEditIcons=a),A(a=N())&&(r._allRemoveIcons=a)}},viewQuery:function(i,r){if(i&1&&lt(S2,5),i&2){let o;A(o=N())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&R("keydown",function(a){return r._handleKeydown(a)}),i&2&&(Ln("id",r.id),me("role",r.role)("aria-label",r.ariaLabel),ct("mat-"+(r.color||"primary")),$("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",L],highlighted:[2,"highlighted","highlighted",L],disableRipple:[2,"disableRipple","disableRipple",L],disabled:[2,"disabled","disabled",L]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[pe([{provide:MS,useExisting:t}])],ngContentSelectors:w2,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(xe(y2),ne(0,"span",0),m(1,"span",1)(2,"span",2),F(3,C2,2,0,"span",3),m(4,"span",4),z(5),ne(6,"span",5),f()()(),F(7,x2,2,0,"span",6)),i&2&&(v(3),P(r.leadingIcon?3:-1),v(4),P(r._hasTrailingIcon()?7:-1))},dependencies:[TS],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var kS=(()=>{class t{_elementRef=d(O);_changeDetectorRef=d(Qe);_dir=d(Tt,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new M;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Nn;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Et(null),it(()=>At(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Et(this._chips)).subscribe(e=>{let i=[];e.forEach(r=>r._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new Co(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(we(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(we(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Et(null),we(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(we(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=o||a;this._isValidIndex(r)&&s&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-chip-set"]],contentQueries:function(i,r,o){if(i&1&&Ze(o,Qv,5),i&2){let a;A(a=N())&&(r._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,r){i&1&&R("keydown",function(a){return r._handleKeydown(a)}),i&2&&me("role",r.role)},inputs:{disabled:[2,"disabled","disabled",L],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:vn(e)]},ngContentSelectors:D2,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(xe(),an(0,"div",0),z(1),sn())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var RS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({providers:[is,{provide:E2,useValue:{separatorKeyCodes:[13]}}],imports:[Mr,Ce]})}return t})();var AS=()=>["id","username","roles","actions"],NS=()=>["no","name","unis","actions"],bf=(t,n)=>n.id;function M2(t,n){if(t&1){let e=Ie();m(0,"div",3)(1,"mat-form-field",45)(2,"mat-label"),p(3,"New Password"),f(),m(4,"input",24),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.accountNewPassword,r)||(o.accountNewPassword=r),q(r)}),f()(),m(5,"mat-form-field",45)(6,"mat-label"),p(7,"Confirm Password"),f(),m(8,"input",24),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.accountConfirmPassword,r)||(o.accountConfirmPassword=r),q(r)}),f()(),m(9,"div",46)(10,"button",47),R("click",function(){G(e);let r=w();return q(r.onChangePassword())}),p(11,"Update"),f(),m(12,"button",48),R("click",function(){G(e);let r=w();return q(r.cancelChangePassword())}),p(13,"Cancel"),f()()()}if(t&2){let e=w();v(4),Me("ngModel",e.accountNewPassword),v(4),Me("ngModel",e.accountConfirmPassword)}}function T2(t,n){if(t&1){let e=Ie();m(0,"div",4)(1,"button",49),R("click",function(){G(e);let r=w();return q(r.startChangePassword())}),m(2,"mat-icon"),p(3,"key"),f(),p(4," Change Password "),f(),m(5,"button",50),R("click",function(){G(e);let r=w();return q(r.logout())}),m(6,"mat-icon"),p(7,"logout"),f(),p(8," Logout "),f()()}}function k2(t,n){if(t&1&&(m(0,"div",6)(1,"mat-icon"),p(2,"error"),f(),p(3),f()),t&2){let e=w();v(3),Oe(" ",e.errorMessage()," ")}}function R2(t,n){if(t&1){let e=Ie();m(0,"mat-list-item")(1,"mat-icon",51),p(2,"school"),f(),m(3,"div",52),p(4),f(),m(5,"div",53),p(6),f(),m(7,"button",54),R("click",function(){let r=G(e).$implicit,o=w();return q(o.deleteFaculty(r.id))}),m(8,"mat-icon"),p(9,"delete"),f()()(),ne(10,"mat-divider")}if(t&2){let e=n.$implicit;v(4),_e(e.name),v(2),Oe("ID: ",e.id)}}function A2(t,n){t&1&&(m(0,"mat-list-item"),p(1,"No faculties found."),f())}function N2(t,n){if(t&1){let e=Ie();m(0,"mat-card",22)(1,"mat-card-header")(2,"mat-card-title"),p(3),f(),m(4,"mat-card-subtitle"),p(5),f()(),m(6,"mat-card-actions",55)(7,"span",56),p(8),f(),m(9,"button",57),R("click",function(){let r=G(e).$implicit,o=w();return q(o.deleteUniversity(r.id))}),m(10,"mat-icon"),p(11,"delete"),f()()()()}if(t&2){let e=n.$implicit;v(3),_e(e.name),v(2),Vn("",e.city,", ",e.country),v(3),Oe("ID: ",e.id)}}function O2(t,n){t&1&&(m(0,"th",58),p(1,"ID"),f())}function F2(t,n){if(t&1&&(m(0,"td",59),p(1),f()),t&2){let e=n.$implicit;v(),_e(e.id)}}function P2(t,n){t&1&&(m(0,"th",58),p(1,"Username"),f())}function L2(t,n){t&1&&(m(0,"span",60),p(1,"(You)"),f())}function V2(t,n){if(t&1&&(m(0,"td",59)(1,"strong"),p(2),f(),F(3,L2,2,0,"span",60),f()),t&2){let e=n.$implicit,i=w();v(2),_e(e.username),v(),P(e.username===i.tokenStorage.getUsername()?3:-1)}}function B2(t,n){t&1&&(m(0,"th",58),p(1,"Roles"),f())}function j2(t,n){if(t&1&&(m(0,"td",59)(1,"span",61),p(2),f()()),t&2){let e=n.$implicit,i=w();v(2),_e(i.getRolesString(e))}}function U2(t,n){t&1&&(m(0,"th",58),p(1,"Actions"),f())}function H2(t,n){if(t&1){let e=Ie();m(0,"td",59)(1,"div",62)(2,"mat-form-field",63)(3,"mat-select",64,0),R("selectionChange",function(){let r=G(e).$implicit,o=qe(4),a=w();return q(a.updateUserRole(r,o.value))}),m(5,"mat-option",26),p(6,"User"),f(),m(7,"mat-option",27),p(8,"Moderator"),f(),m(9,"mat-option",28),p(10,"Admin"),f()()(),m(11,"mat-form-field",65)(12,"mat-label"),p(13,"New Temp Pwd"),f(),m(14,"input",19),R("ngModelChange",function(r){let o=G(e).$implicit,a=w();return q(a.updateTempPwd(o.id,r))}),f()(),m(15,"button",66),R("click",function(){let r=G(e).$implicit,o=w();return q(o.resetUserPassword(r.id))}),p(16," Reset "),f()()()}if(t&2){let e=n.$implicit,i=w();v(3),Z("disabled",e.username===i.tokenStorage.getUsername()),v(11),Z("ngModel",i.userPasswords()[e.id]||"")}}function z2(t,n){t&1&&ne(0,"tr",67)}function $2(t,n){if(t&1&&ne(0,"tr",68),t&2){let e=n.$implicit,i=w();Ut("background-color",e.username===i.tokenStorage.getUsername()?"rgba(63, 81, 181, 0.05)":"transparent")}}function W2(t,n){if(t&1&&(m(0,"mat-option",40),p(1),f()),t&2){let e=n.$implicit;Z("value",e.id),v(),Vn("",e.name," (",e.city,")")}}function G2(t,n){t&1&&(m(0,"th",58),p(1,"OLA No"),f())}function q2(t,n){if(t&1&&(m(0,"td",59),p(1),f()),t&2){let e=n.$implicit;v(),_e(e.olaNo)}}function Q2(t,n){t&1&&(m(0,"th",58),p(1,"Name"),f())}function Y2(t,n){if(t&1&&(m(0,"td",59)(1,"strong"),p(2),f()()),t&2){let e=n.$implicit;v(2),_e(e.name)}}function Z2(t,n){t&1&&(m(0,"th",58),p(1,"Linked Universities"),f())}function K2(t,n){if(t&1&&(m(0,"mat-chip"),p(1),f()),t&2){let e=n.$implicit;v(),_e(e.name)}}function X2(t,n){t&1&&(m(0,"span",69),p(1,"None"),f())}function J2(t,n){if(t&1&&(m(0,"td",59)(1,"mat-chip-set"),bt(2,K2,2,1,"mat-chip",null,bf,!1,X2,2,0,"span",69),f()()),t&2){let e=n.$implicit;v(2),yt(e.destUnis)}}function eV(t,n){t&1&&(m(0,"th",58),p(1,"Actions"),f())}function tV(t,n){if(t&1){let e=Ie();m(0,"td",59)(1,"button",57),R("click",function(){let r=G(e).$implicit,o=w();return q(o.deleteOlaAgreement(r.olaNo))}),m(2,"mat-icon"),p(3,"delete"),f()()()}}function nV(t,n){t&1&&ne(0,"tr",67)}function iV(t,n){t&1&&ne(0,"tr",68)}var yf=class t{board=D("");errorMessage=D("");currentView=D("faculties");facultyName=D("");faculties=D([]);uniName=D("");uniCountry=D("");uniCity=D("");universities=D([]);users=D([]);newUsername=D("");newPassword=D("");newRole=D("ROLE_USER");userPasswords=D({});olaAgreements=D([]);newOlaNo=D(null);newOlaName=D("");selectedDestUniId=D(null);isChangingPassword=D(!1);accountNewPassword=D("");accountConfirmPassword=D("");userService=d(xr);platformId=d(jt);http=d(Ct);tokenStorage=d(Dt);ngOnInit(){ai(this.platformId)&&(this.loadData(),this.loadFaculties(),this.loadUniversities())}setView(n){this.currentView.set(n),n==="users"?this.loadUsers():n==="ola"&&(this.loadOlaAgreements(),this.loadUniversities())}loadData(){this.userService.getAdminPage().subscribe({next:n=>{this.board.set(n)},error:n=>{this.errorMessage.set(`Board Error: ${n.status}`)}})}loadFaculties(){this.http.get("http://localhost:8080/faculties").subscribe(n=>{this.faculties.set(n)})}loadUniversities(){this.http.get("http://localhost:8080/universities").subscribe(n=>{this.universities.set(n)})}loadUsers(){this.errorMessage.set(""),this.http.get("http://localhost:8080/admin/users").subscribe({next:n=>{this.users.set(n)},error:n=>{console.error("Failed to load users",n),this.errorMessage.set(`Failed to load users: ${n.status} ${n.message}`)}})}loadOlaAgreements(){this.http.get("http://localhost:8080/ola-agreements").subscribe(n=>{this.olaAgreements.set(n)})}addFaculty(){let n=this.facultyName().trim();n&&this.http.post("http://localhost:8080/faculties",{name:n}).subscribe({next:()=>{this.facultyName.set(""),this.loadFaculties()},error:e=>{alert("Failed to add faculty")}})}deleteFaculty(n){confirm("Are you sure you want to delete this faculty?")&&this.http.delete(`http://localhost:8080/faculties/${n}`).subscribe({next:()=>{this.loadFaculties()},error:e=>{alert("Failed to delete faculty")}})}addUniversity(){let n=this.uniName().trim(),e=this.uniCountry().trim(),i=this.uniCity().trim();!n||!e||!i||this.http.post("http://localhost:8080/universities",{name:n,country:e,city:i}).subscribe({next:()=>{this.uniName.set(""),this.uniCountry.set(""),this.uniCity.set(""),this.loadUniversities()},error:r=>{alert("Failed to add university")}})}deleteUniversity(n){confirm("Are you sure you want to delete this university?")&&this.http.delete(`http://localhost:8080/universities/${n}`).subscribe({next:()=>{this.loadUniversities()},error:e=>{alert("Failed to delete university")}})}addUser(){let n=this.newUsername().trim(),e=this.newPassword().trim(),i=this.newRole();if(!n||!e){alert("Username and password are required");return}this.errorMessage.set(""),this.http.post("http://localhost:8080/admin/users",{username:n,password:e,roles:[i]}).subscribe({next:()=>{this.newUsername.set(""),this.newPassword.set(""),this.loadUsers(),alert("User added successfully")},error:r=>{console.error("Failed to add user",r),this.errorMessage.set(`Failed to add user: ${r.status} ${r.error?.message||r.message}`),alert("Failed to add user")}})}updateUserRole(n,e){e&&(this.errorMessage.set(""),this.http.put(`http://localhost:8080/admin/users/${n.id}/roles`,[e]).subscribe({next:()=>{this.loadUsers(),alert("User role updated")},error:i=>{console.error("Failed to update user role",i),this.errorMessage.set(`Failed to update role: ${i.status}`),alert("Failed to update user role")}}))}resetUserPassword(n){let e=this.userPasswords()[n]?.trim();confirm(e?"Are you sure you want to set a NEW temporary password and force a reset for this user?":"Are you sure you want to force a password reset for this user? (They will need to know their current password to log in)")&&this.http.post(`http://localhost:8080/admin/users/${n}/reset-password`,{newPassword:e||""}).subscribe({next:()=>{alert(e?"Temporary password set and reset flag triggered!":"Password reset flag set successfully");let r=C({},this.userPasswords());delete r[n],this.userPasswords.set(r),this.loadUsers()},error:r=>{alert("Failed to reset password")}})}updateTempPwd(n,e){let i=te(C({},this.userPasswords()),{[n]:e});this.userPasswords.set(i)}addOlaAgreement(){let n=this.newOlaNo(),e=this.newOlaName().trim(),i=this.selectedDestUniId();if(n===null||!e||!i){alert("OLA Number, Name, and University are required");return}this.http.post("http://localhost:8080/ola-agreements",{olaNo:n,name:e,destUniId:i}).subscribe({next:()=>{this.newOlaNo.set(null),this.newOlaName.set(""),this.loadOlaAgreements(),alert("OLA Agreement added successfully")},error:r=>{alert("Failed to add OLA Agreement: "+(r.error?.message||r.message||r))}})}deleteOlaAgreement(n){confirm("Are you sure you want to delete this OLA Agreement?")&&this.http.delete(`http://localhost:8080/ola-agreements/${n}`).subscribe({next:()=>{this.loadOlaAgreements()},error:e=>{alert("Failed to delete OLA Agreement")}})}getRolesString(n){return!n||!n.roles?"":n.roles.map(e=>e.name).join(", ")}logout(){this.tokenStorage.signOut(),window.location.reload()}startChangePassword(){this.isChangingPassword.set(!0)}cancelChangePassword(){this.isChangingPassword.set(!1),this.accountNewPassword.set(""),this.accountConfirmPassword.set("")}onChangePassword(){if(this.accountNewPassword()!==this.accountConfirmPassword()){alert("Passwords do not match");return}if(this.accountNewPassword().length<6){alert("Password must be at least 6 characters");return}this.http.post("http://localhost:8080/auth/change-password",{newPassword:this.accountNewPassword()}).subscribe({next:()=>{alert("Password changed successfully! Please login again."),this.logout()},error:n=>{alert("Failed to change password")}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-admin"]],decls:161,vars:24,consts:[["roleSelect",""],[1,"admin-dashboard"],[1,"account-card"],[1,"password-form"],[1,"account-info"],[1,"dashboard-content"],[1,"error-banner"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","0ms"],["label","Faculties"],[1,"tab-padding"],[1,"admin-section"],[1,"action-card"],[1,"inline-form"],["appearance","outline"],["matInput","","placeholder","e.g. Computer Science",3,"ngModelChange","ngModel"],["mat-raised-button","","color","primary",3,"click"],[1,"mat-elevation-z1","list-container"],["label","Universities"],[1,"stacked-form"],["matInput","",3,"ngModelChange","ngModel"],[1,"form-row"],[1,"uni-grid"],[1,"item-card","mat-elevation-z1"],["label","User Management"],["matInput","","type","password",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],["value","ROLE_USER"],["value","ROLE_MODERATOR"],["value","ROLE_ADMIN"],["mat-table","",1,"mat-elevation-z1","admin-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","username"],["matColumnDef","roles"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"background-color",4,"matRowDef","matRowDefColumns"],["label","OLA Agreements"],["matInput","","type","number",3,"ngModelChange","ngModel"],[3,"value"],["matColumnDef","no"],["matColumnDef","name"],["matColumnDef","unis"],["mat-row","",4,"matRowDef","matRowDefColumns"],["appearance","outline",1,"full-width"],[1,"form-actions"],["mat-raised-button","","color","accent",3,"click"],["mat-button","",3,"click"],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","warn",3,"click"],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""],["mat-icon-button","","matListItemMeta","","color","warn",3,"click"],["align","end"],[1,"id-tag"],["mat-icon-button","","color","warn",3,"click"],["mat-header-cell",""],["mat-cell",""],[1,"you-badge"],[1,"role-chip"],[1,"user-actions"],["appearance","fill",1,"tiny-select"],["placeholder","Change Role",3,"selectionChange","disabled"],["appearance","outline",1,"pwd-input"],["mat-stroked-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"empty-text"]],template:function(e,i){e&1&&(m(0,"div",1)(1,"mat-card",2)(2,"mat-card-header")(3,"mat-card-title")(4,"mat-icon"),p(5,"admin_panel_settings"),f(),p(6),f(),m(7,"mat-card-subtitle"),p(8,"Administrator Console"),f()(),m(9,"mat-card-content"),F(10,M2,14,2,"div",3)(11,T2,9,0,"div",4),f()(),m(12,"div",5),F(13,k2,4,1,"div",6),m(14,"mat-tab-group",7)(15,"mat-tab",8)(16,"div",9)(17,"div",10)(18,"mat-card",11)(19,"mat-card-header")(20,"mat-card-title"),p(21,"Add New Faculty"),f()(),m(22,"mat-card-content")(23,"div",12)(24,"mat-form-field",13)(25,"mat-label"),p(26,"Faculty Name"),f(),m(27,"input",14),Te("ngModelChange",function(o){return ke(i.facultyName,o)||(i.facultyName=o),o}),f()(),m(28,"button",15),R("click",function(){return i.addFaculty()}),m(29,"mat-icon"),p(30,"add"),f(),p(31," Add "),f()()()(),m(32,"h3"),p(33,"Existing Faculties"),f(),m(34,"mat-list",16),bt(35,R2,11,2,null,null,bf,!1,A2,2,0,"mat-list-item"),f()()()(),m(38,"mat-tab",17)(39,"div",9)(40,"div",10)(41,"mat-card",11)(42,"mat-card-header")(43,"mat-card-title"),p(44,"Add New University"),f()(),m(45,"mat-card-content")(46,"div",18)(47,"mat-form-field",13)(48,"mat-label"),p(49,"University Name"),f(),m(50,"input",19),Te("ngModelChange",function(o){return ke(i.uniName,o)||(i.uniName=o),o}),f()(),m(51,"div",20)(52,"mat-form-field",13)(53,"mat-label"),p(54,"Country"),f(),m(55,"input",19),Te("ngModelChange",function(o){return ke(i.uniCountry,o)||(i.uniCountry=o),o}),f()(),m(56,"mat-form-field",13)(57,"mat-label"),p(58,"City"),f(),m(59,"input",19),Te("ngModelChange",function(o){return ke(i.uniCity,o)||(i.uniCity=o),o}),f()()(),m(60,"button",15),R("click",function(){return i.addUniversity()}),m(61,"mat-icon"),p(62,"add_business"),f(),p(63," Add University "),f()()()(),m(64,"h3"),p(65,"Existing Universities"),f(),m(66,"div",21),bt(67,N2,12,4,"mat-card",22,bf),f()()()(),m(69,"mat-tab",23)(70,"div",9)(71,"div",10)(72,"mat-card",11)(73,"mat-card-header")(74,"mat-card-title"),p(75,"Create System Account"),f()(),m(76,"mat-card-content")(77,"div",20)(78,"mat-form-field",13)(79,"mat-label"),p(80,"Username"),f(),m(81,"input",19),Te("ngModelChange",function(o){return ke(i.newUsername,o)||(i.newUsername=o),o}),f()(),m(82,"mat-form-field",13)(83,"mat-label"),p(84,"Initial Password"),f(),m(85,"input",24),Te("ngModelChange",function(o){return ke(i.newPassword,o)||(i.newPassword=o),o}),f()(),m(86,"mat-form-field",13)(87,"mat-label"),p(88,"Role"),f(),m(89,"mat-select",25),Te("ngModelChange",function(o){return ke(i.newRole,o)||(i.newRole=o),o}),m(90,"mat-option",26),p(91,"User"),f(),m(92,"mat-option",27),p(93,"Moderator"),f(),m(94,"mat-option",28),p(95,"Admin"),f()()()(),m(96,"button",15),R("click",function(){return i.addUser()}),m(97,"mat-icon"),p(98,"person_add"),f(),p(99," Create User "),f()()(),m(100,"h3"),p(101,"System Users"),f(),m(102,"table",29),Ee(103,30),se(104,O2,2,0,"th",31)(105,F2,2,1,"td",32),Se(),Ee(106,33),se(107,P2,2,0,"th",31)(108,V2,4,2,"td",32),Se(),Ee(109,34),se(110,B2,2,0,"th",31)(111,j2,3,1,"td",32),Se(),Ee(112,35),se(113,U2,2,0,"th",31)(114,H2,17,2,"td",32),Se(),se(115,z2,1,0,"tr",36)(116,$2,1,2,"tr",37),f()()()(),m(117,"mat-tab",38)(118,"div",9)(119,"div",10)(120,"mat-card",11)(121,"mat-card-header")(122,"mat-card-title"),p(123,"Create OLA Agreement"),f()(),m(124,"mat-card-content")(125,"div",20)(126,"mat-form-field",13)(127,"mat-label"),p(128,"OLA Number"),f(),m(129,"input",39),Te("ngModelChange",function(o){return ke(i.newOlaNo,o)||(i.newOlaNo=o),o}),f()(),m(130,"mat-form-field",13)(131,"mat-label"),p(132,"Agreement Name"),f(),m(133,"input",19),Te("ngModelChange",function(o){return ke(i.newOlaName,o)||(i.newOlaName=o),o}),f()(),m(134,"mat-form-field",13)(135,"mat-label"),p(136,"Target University"),f(),m(137,"mat-select",25),Te("ngModelChange",function(o){return ke(i.selectedDestUniId,o)||(i.selectedDestUniId=o),o}),bt(138,W2,2,3,"mat-option",40,bf),f()()(),m(140,"button",15),R("click",function(){return i.addOlaAgreement()}),m(141,"mat-icon"),p(142,"description"),f(),p(143," Register OLA "),f()()(),m(144,"h3"),p(145,"Registered OLA Agreements"),f(),m(146,"table",29),Ee(147,41),se(148,G2,2,0,"th",31)(149,q2,2,1,"td",32),Se(),Ee(150,42),se(151,Q2,2,0,"th",31)(152,Y2,3,1,"td",32),Se(),Ee(153,43),se(154,Z2,2,0,"th",31)(155,J2,5,1,"td",32),Se(),Ee(156,35),se(157,eV,2,0,"th",31)(158,tV,4,0,"td",32),Se(),se(159,nV,1,0,"tr",36)(160,iV,1,0,"tr",44),f()()()()()()()),e&2&&(v(6),Oe(" ",i.tokenStorage.getUsername()," "),v(4),P(i.isChangingPassword()?10:11),v(3),P(i.errorMessage()?13:-1),v(14),Me("ngModel",i.facultyName),v(8),yt(i.faculties()),v(15),Me("ngModel",i.uniName),v(5),Me("ngModel",i.uniCountry),v(4),Me("ngModel",i.uniCity),v(8),yt(i.universities()),v(14),Me("ngModel",i.newUsername),v(4),Me("ngModel",i.newPassword),v(4),Me("ngModel",i.newRole),v(13),Z("dataSource",i.users()),v(13),Z("matHeaderRowDef",Qt(20,AS)),v(),Z("matRowDefColumns",Qt(21,AS)),v(13),Me("ngModel",i.newOlaNo),v(4),Me("ngModel",i.newOlaName),v(4),Me("ngModel",i.selectedDestUniId),v(),yt(i.universities()),v(8),Z("dataSource",i.olaAgreements()),v(13),Z("matHeaderRowDef",Qt(22,NS)),v(),Z("matRowDefColumns",Qt(23,NS)))},dependencies:[ui,wn,_o,di,Hn,Yt,Ua,So,ja,_i,mi,_E,hi,gi,pi,fi,Ja,za,Wa,Ya,Ga,$a,Za,qa,Qa,Ka,Xa,bi,vi,un,Kt,En,Dn,Nv,Wt,ss,mf,Tr,Sn,yi,Ci,wi,ds,ls,cs,Ro,ko,To,Gv,RS,Qv,kS],styles:[".admin-dashboard[_ngcontent-%COMP%]{max-width:1400px;margin:0 auto;padding:20px}.account-card[_ngcontent-%COMP%]{margin-bottom:30px;border-top:4px solid #3f51b5}.account-info[_ngcontent-%COMP%]{display:flex;gap:15px;margin-top:10px}.password-form[_ngcontent-%COMP%]{max-width:400px;display:flex;flex-direction:column;gap:10px}.form-actions[_ngcontent-%COMP%]{display:flex;gap:10px;margin-top:10px}.tab-padding[_ngcontent-%COMP%]{padding:25px 0}.admin-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:30px}.action-card[_ngcontent-%COMP%]{border-radius:12px}.inline-form[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;flex-wrap:wrap}.stacked-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.form-row[_ngcontent-%COMP%]{display:flex;gap:20px;flex-wrap:wrap}.form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1;min-width:200px}.list-container[_ngcontent-%COMP%]{max-width:600px;background-color:#fff;border-radius:8px}.uni-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px}.item-card[_ngcontent-%COMP%]{transition:transform .2s}.item-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.id-tag[_ngcontent-%COMP%]{font-size:.75rem;color:#888;margin-right:auto;padding-left:15px}.admin-table[_ngcontent-%COMP%]{width:100%}.role-chip[_ngcontent-%COMP%]{background-color:#f0f2f5;padding:4px 10px;border-radius:12px;font-size:.85rem;font-weight:500}.user-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.tiny-select[_ngcontent-%COMP%], .pwd-input[_ngcontent-%COMP%]{width:150px}.you-badge[_ngcontent-%COMP%]{font-size:.7rem;background-color:#3f51b5;color:#fff;padding:2px 6px;border-radius:10px;margin-left:5px}.empty-text[_ngcontent-%COMP%]{color:#999;font-style:italic}.error-banner[_ngcontent-%COMP%]{background-color:#ffebee;color:#d32f2f;padding:15px;border-radius:4px;margin-bottom:20px;display:flex;align-items:center;gap:10px}  .mat-mdc-form-field-subscript-wrapper{display:none}mat-card-header[_ngcontent-%COMP%]{margin-bottom:15px}"]})};var OS=()=>["id","username","faculty","uni","ola","status"],FS=()=>["username","currentPts","wa","lg","sg","action"],Yv=(t,n)=>n.id,PS=(t,n)=>n.olaNo;function rV(t,n){if(t&1){let e=Ie();m(0,"div",3)(1,"mat-form-field",32)(2,"mat-label"),p(3,"New Password"),f(),m(4,"input",33),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.newPassword,r)||(o.newPassword=r),q(r)}),f()(),m(5,"mat-form-field",32)(6,"mat-label"),p(7,"Confirm Password"),f(),m(8,"input",33),Te("ngModelChange",function(r){G(e);let o=w();return ke(o.confirmPassword,r)||(o.confirmPassword=r),q(r)}),f()(),m(9,"div",34)(10,"button",35),R("click",function(){G(e);let r=w();return q(r.onChangePassword())}),p(11,"Update"),f(),m(12,"button",36),R("click",function(){G(e);let r=w();return q(r.cancelChangePassword())}),p(13,"Cancel"),f()()()}if(t&2){let e=w();v(4),Me("ngModel",e.newPassword),v(4),Me("ngModel",e.confirmPassword)}}function oV(t,n){if(t&1){let e=Ie();m(0,"div",4)(1,"button",37),R("click",function(){G(e);let r=w();return q(r.startChangePassword())}),m(2,"mat-icon"),p(3,"key"),f(),p(4," Change Password "),f(),m(5,"button",38),R("click",function(){G(e);let r=w();return q(r.logout())}),m(6,"mat-icon"),p(7,"logout"),f(),p(8," Logout "),f()()}}function aV(t,n){if(t&1&&(m(0,"div",6)(1,"mat-icon"),p(2,"error"),f(),p(3),f()),t&2){let e=w();v(3),Oe(" ",e.errorMessage()," ")}}function sV(t,n){t&1&&(m(0,"th",39),p(1,"ID"),f())}function lV(t,n){if(t&1&&(m(0,"td",40),p(1),f()),t&2){let e=n.$implicit;v(),_e(e.id)}}function cV(t,n){t&1&&(m(0,"th",39),p(1,"Username"),f())}function dV(t,n){t&1&&(m(0,"span",41),p(1,"(You)"),f())}function uV(t,n){if(t&1&&(m(0,"td",40)(1,"strong"),p(2),f(),F(3,dV,2,0,"span",41),f()),t&2){let e=n.$implicit,i=w();v(2),_e(e.user==null?null:e.user.username),v(),P((e.user==null?null:e.user.username)===i.tokenStorage.getUsername()?3:-1)}}function mV(t,n){t&1&&(m(0,"th",39),p(1,"Faculty"),f())}function fV(t,n){if(t&1&&(m(0,"mat-option",44),p(1),f()),t&2){let e=n.$implicit;Z("value",e.id),v(),_e(e.name)}}function hV(t,n){if(t&1){let e=Ie();m(0,"td",40)(1,"mat-form-field",42)(2,"mat-select",43),R("ngModelChange",function(r){let o=G(e).$implicit,a=w();return q(a.assignToStudent(o.id,"facultyId",r))}),bt(3,fV,2,2,"mat-option",44,Yv),f()()()}if(t&2){let e=n.$implicit,i=w();v(2),Z("ngModel",e.faculty==null?null:e.faculty.id),v(),yt(i.faculties())}}function pV(t,n){t&1&&(m(0,"th",39),p(1,"Dest Uni"),f())}function gV(t,n){if(t&1&&(m(0,"mat-option",44),p(1),f()),t&2){let e=n.$implicit;Z("value",e.id),v(),_e(e.name)}}function _V(t,n){if(t&1){let e=Ie();m(0,"td",40)(1,"mat-form-field",42)(2,"mat-select",43),R("ngModelChange",function(r){let o=G(e).$implicit,a=w();return q(a.assignToStudent(o.id,"destUniId",r))}),bt(3,gV,2,2,"mat-option",44,Yv),f()()()}if(t&2){let e=n.$implicit,i=w();v(2),Z("ngModel",e.destUni==null?null:e.destUni.id),v(),yt(i.universities())}}function vV(t,n){t&1&&(m(0,"th",39),p(1,"OLA Agreement"),f())}function bV(t,n){if(t&1&&(m(0,"div",46),p(1),f()),t&2){let e=w().$implicit;v(),Vn("#",e.olaAgreement.olaNo," - ",e.olaAgreement.name)}}function yV(t,n){if(t&1&&(m(0,"mat-option",44),p(1),f()),t&2){let e=n.$implicit;Z("value",e.olaNo),v(),_e(e.name)}}function wV(t,n){if(t&1){let e=Ie();m(0,"td",40)(1,"div",45),F(2,bV,2,2,"div",46),m(3,"mat-form-field",42)(4,"mat-select",43),R("ngModelChange",function(r){let o=G(e).$implicit,a=w();return q(a.assignToStudent(o.id,"olaNo",r))}),bt(5,yV,2,2,"mat-option",44,PS),f()()()()}if(t&2){let e=n.$implicit,i=w();v(2),P(e.olaAgreement?2:-1),v(2),Z("ngModel",e.olaAgreement==null?null:e.olaAgreement.olaNo),v(),yt(e.destUni!=null&&e.destUni.id?i.getAgreementsForUni(e.destUni.id):i.olaAgreements())}}function CV(t,n){t&1&&(m(0,"th",39),p(1,"Status"),f())}function xV(t,n){if(t&1){let e=Ie();m(0,"td",40)(1,"div",47)(2,"span",48),p(3),f(),m(4,"mat-form-field",49)(5,"mat-select",50,0),R("selectionChange",function(){let r=G(e).$implicit,o=qe(6),a=w();return q(a.updateOlaStatus(r.id,o.value))}),m(7,"mat-option",51),p(8,"SENT"),f(),m(9,"mat-option",52),p(10,"SIGNED"),f(),m(11,"mat-option",53),p(12,"REJECTED"),f()()()()()}if(t&2){let e=n.$implicit;v(2),ct(e.olaStatus),v(),Oe(" ",e.olaStatus||"Not Set"," ")}}function DV(t,n){t&1&&ne(0,"tr",54)}function EV(t,n){if(t&1&&ne(0,"tr",55),t&2){let e=n.$implicit,i=w();Ut("background-color",(e.user==null?null:e.user.username)===i.tokenStorage.getUsername()?"rgba(63, 81, 181, 0.05)":"transparent")}}function SV(t,n){t&1&&(m(0,"th",39),p(1,"Student"),f())}function IV(t,n){t&1&&(m(0,"span",41),p(1,"(You)"),f())}function MV(t,n){if(t&1&&(m(0,"td",40)(1,"strong"),p(2),f(),F(3,IV,2,0,"span",41),f()),t&2){let e=n.$implicit,i=w();v(2),_e(e.user==null?null:e.user.username),v(),P((e.user==null?null:e.user.username)===i.tokenStorage.getUsername()?3:-1)}}function TV(t,n){t&1&&(m(0,"th",39),p(1,"Current Pts"),f())}function kV(t,n){if(t&1&&(m(0,"td",56),p(1),f()),t&2){let e=n.$implicit;v(),_e(e.points)}}function RV(t,n){t&1&&(m(0,"th",39),p(1,"Weighted Avg (max 10)"),f())}function AV(t,n){if(t&1){let e=Ie();m(0,"td",40)(1,"mat-form-field",57)(2,"input",58),R("ngModelChange",function(r){let o=G(e).$implicit,a=w();return q(a.updateCalcInput(o.id,"wa",r))}),f()()()}if(t&2){let e,i=n.$implicit,r=w();v(2),Z("ngModel",((e=r.calcInputs()[i.id])==null?null:e.wa)||0)}}function NV(t,n){t&1&&(m(0,"th",39),p(1,"Language (max 11)"),f())}function OV(t,n){if(t&1){let e=Ie();m(0,"td",40)(1,"mat-form-field",59)(2,"input",60),R("ngModelChange",function(r){let o=G(e).$implicit,a=w();return q(a.updateCalcInput(o.id,"lg",r))}),f()()()}if(t&2){let e,i=n.$implicit,r=w();v(2),Z("ngModel",((e=r.calcInputs()[i.id])==null?null:e.lg)||0)}}function FV(t,n){t&1&&(m(0,"th",39),p(1,"Subjective (max 5)"),f())}function PV(t,n){if(t&1){let e=Ie();m(0,"td",40)(1,"mat-form-field",59)(2,"input",61),R("ngModelChange",function(r){let o=G(e).$implicit,a=w();return q(a.updateCalcInput(o.id,"sg",r))}),f()()()}if(t&2){let e,i=n.$implicit,r=w();v(2),Z("ngModel",((e=r.calcInputs()[i.id])==null?null:e.sg)||0)}}function LV(t,n){t&1&&(m(0,"th",39),p(1,"Action"),f())}function VV(t,n){if(t&1){let e=Ie();m(0,"td",40)(1,"button",62),R("click",function(){let r=G(e).$implicit,o=w();return q(o.calculateAndSavePoints(r.id))}),m(2,"mat-icon"),p(3,"save"),f(),p(4," Save "),f()()}}function BV(t,n){t&1&&ne(0,"tr",54)}function jV(t,n){if(t&1&&ne(0,"tr",55),t&2){let e=n.$implicit,i=w();Ut("background-color",(e.user==null?null:e.user.username)===i.tokenStorage.getUsername()?"rgba(63, 81, 181, 0.05)":"transparent")}}function UV(t,n){if(t&1&&(m(0,"mat-list-item")(1,"mat-icon",65),p(2,"description"),f(),m(3,"div",66),p(4),f(),m(5,"div",67),p(6),f()()),t&2){let e=n.$implicit;v(4),Oe("#",e.olaNo),v(2),_e(e.name)}}function HV(t,n){t&1&&(m(0,"div",64),p(1,"No agreements linked to this university."),f())}function zV(t,n){if(t&1&&(m(0,"mat-card",31)(1,"mat-card-header")(2,"mat-card-title"),p(3),f(),m(4,"mat-card-subtitle"),p(5),f()(),m(6,"mat-card-content"),ne(7,"mat-divider"),m(8,"h5",63),p(9,"Linked OLA Agreements:"),f(),m(10,"mat-list"),bt(11,UV,7,2,"mat-list-item",null,PS,!1,HV,2,0,"div",64),f()()()),t&2){let e=n.$implicit,i=w();v(3),_e(e.name),v(2),Vn("",e.city,", ",e.country),v(6),yt(i.getAgreementsForUni(e.id))}}var wf=class t{board=D("");errorMessage=D("");currentView=D("students");students=D([]);universities=D([]);olaAgreements=D([]);faculties=D([]);calcInputs=D({});isChangingPassword=D(!1);newPassword=D("");confirmPassword=D("");userService=d(xr);studentService=d(Fa);platformId=d(jt);tokenStorage=d(Dt);http=d(Ct);ngOnInit(){ai(this.platformId)&&(this.loadBoard(),this.loadStudents(),this.loadUniversities(),this.loadOlaAgreements(),this.loadFaculties())}loadBoard(){this.userService.getModPage().subscribe({next:n=>{this.board.set(n)},error:n=>{this.errorMessage.set(`${n.status}: ${n.error?.message||n.message}`)}})}loadStudents(){this.studentService.getStudents().subscribe({next:n=>{this.students.set(n)},error:n=>{this.errorMessage.set(`Failed to load students: ${n.status}`)}})}loadUniversities(){this.http.get("http://localhost:8080/universities").subscribe(n=>{this.universities.set(n)})}loadOlaAgreements(){this.http.get("http://localhost:8080/ola-agreements").subscribe(n=>{this.olaAgreements.set(n)})}loadFaculties(){this.http.get("http://localhost:8080/faculties").subscribe(n=>{this.faculties.set(n)})}getAgreementsForUni(n){return this.olaAgreements().filter(e=>e.destUnis&&e.destUnis.some(i=>i.id===n))}assignToStudent(n,e,i){if(n===void 0)return;let r={};r[e]=i,this.studentService.patchStudent(r,n).subscribe({next:()=>{alert(`${e} assigned successfully`),this.loadStudents()},error:o=>{alert(`Failed to assign ${e}`)}})}setView(n){this.currentView.set(n),n==="students"?this.loadStudents():n==="universities"&&(this.loadUniversities(),this.loadOlaAgreements())}updateCalcInput(n,e,i){if(n===void 0)return;let r=this.calcInputs()[n]||{wa:0,lg:0,sg:0};this.calcInputs.set(te(C({},this.calcInputs()),{[n]:te(C({},r),{[e]:i})}))}calculateAndSavePoints(n){if(n===void 0)return;let e=this.calcInputs()[n];if(!e){alert("Please enter grades first");return}let{wa:i,lg:r,sg:o}=e;if(i<0||i>10){alert("Weighted Average must be between 0 and 10");return}if(r<0||r>11){alert("Language Grade must be between 0 and 11");return}if(o<0||o>5){alert("Subjective Grade must be between 0 and 5");return}let s=Math.round(i*100)/100+r+o;this.studentService.patchStudent({points:s},n).subscribe({next:()=>{alert(`Points calculated and saved: ${s.toFixed(2)}`),this.loadStudents()},error:l=>{alert("Failed to save points")}})}updateOlaStatus(n,e){n===void 0||!e||this.studentService.patchStudent({olaStatus:e},n).subscribe({next:()=>{alert("OLA Status updated successfully"),this.loadStudents()},error:i=>{alert("Failed to update OLA Status")}})}logout(){this.tokenStorage.signOut(),window.location.reload()}startChangePassword(){this.isChangingPassword.set(!0)}cancelChangePassword(){this.isChangingPassword.set(!1),this.newPassword.set(""),this.confirmPassword.set("")}onChangePassword(){if(this.newPassword()!==this.confirmPassword()){alert("Passwords do not match");return}if(this.newPassword().length<6){alert("Password must be at least 6 characters");return}this.http.post("http://localhost:8080/auth/change-password",{newPassword:this.newPassword()}).subscribe({next:()=>{alert("Password changed successfully! Please login again."),this.logout()},error:n=>{alert("Failed to change password")}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-mod"]],decls:74,vars:13,consts:[["statusSelect",""],[1,"mod-dashboard"],[1,"account-card"],[1,"password-form"],[1,"account-info"],[1,"dashboard-content"],[1,"error-banner"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","0ms"],["label","Manage Students"],[1,"tab-padding"],["mat-table","",1,"mat-elevation-z1","mod-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","username"],["matColumnDef","faculty"],["matColumnDef","uni"],["matColumnDef","ola"],["matColumnDef","status"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"background-color",4,"matRowDef","matRowDefColumns"],["label","Calculate Points"],[1,"formula-hint"],["matColumnDef","currentPts"],["mat-cell","","class","points-cell",4,"matCellDef"],["matColumnDef","wa"],["matColumnDef","lg"],["matColumnDef","sg"],["matColumnDef","action"],["label","University Agreements"],[1,"uni-grid"],[1,"uni-card","mat-elevation-z2"],["appearance","outline",1,"full-width"],["matInput","","type","password",3,"ngModelChange","ngModel"],[1,"form-actions"],["mat-raised-button","","color","accent",3,"click"],["mat-button","",3,"click"],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","warn",3,"click"],["mat-header-cell",""],["mat-cell",""],[1,"you-badge"],["appearance","fill",1,"table-select"],[3,"ngModelChange","ngModel"],[3,"value"],[1,"ola-cell"],[1,"current-ola"],[1,"status-cell"],[1,"status-indicator"],["appearance","fill",1,"table-select","small-select"],[3,"selectionChange"],["value","SENT"],["value","SIGNED"],["value","REJECTED"],["mat-header-row",""],["mat-row",""],["mat-cell","",1,"points-cell"],["appearance","outline",1,"small-input"],["matInput","","type","number","step","0.01","min","0","max","10",3,"ngModelChange","ngModel"],["appearance","outline",1,"tiny-input"],["matInput","","type","number","min","0","max","11",3,"ngModelChange","ngModel"],["matInput","","type","number","min","0","max","5",3,"ngModelChange","ngModel"],["mat-raised-button","","color","primary",3,"click"],[1,"ola-title"],[1,"empty-list"],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""]],template:function(e,i){e&1&&(m(0,"div",1)(1,"mat-card",2)(2,"mat-card-header")(3,"mat-card-title")(4,"mat-icon"),p(5,"account_circle"),f(),p(6),f(),m(7,"mat-card-subtitle"),p(8,"Moderator Account"),f()(),m(9,"mat-card-content"),F(10,rV,14,2,"div",3)(11,oV,9,0,"div",4),f()(),m(12,"div",5),F(13,aV,4,1,"div",6),m(14,"mat-tab-group",7)(15,"mat-tab",8)(16,"div",9)(17,"h3"),p(18,"Student Assignment Board"),f(),m(19,"table",10),Ee(20,11),se(21,sV,2,0,"th",12)(22,lV,2,1,"td",13),Se(),Ee(23,14),se(24,cV,2,0,"th",12)(25,uV,4,2,"td",13),Se(),Ee(26,15),se(27,mV,2,0,"th",12)(28,hV,5,1,"td",13),Se(),Ee(29,16),se(30,pV,2,0,"th",12)(31,_V,5,1,"td",13),Se(),Ee(32,17),se(33,vV,2,0,"th",12)(34,wV,7,2,"td",13),Se(),Ee(35,18),se(36,CV,2,0,"th",12)(37,xV,13,3,"td",13),Se(),se(38,DV,1,0,"tr",19)(39,EV,1,2,"tr",20),f()()(),m(40,"mat-tab",21)(41,"div",9)(42,"h3"),p(43,"Points Calculation Hub"),f(),m(44,"p",22),p(45,"Formula: Weighted Average + Language Grade + Subjective Grade"),f(),m(46,"table",10),Ee(47,14),se(48,SV,2,0,"th",12)(49,MV,4,2,"td",13),Se(),Ee(50,23),se(51,TV,2,0,"th",12)(52,kV,2,1,"td",24),Se(),Ee(53,25),se(54,RV,2,0,"th",12)(55,AV,3,1,"td",13),Se(),Ee(56,26),se(57,NV,2,0,"th",12)(58,OV,3,1,"td",13),Se(),Ee(59,27),se(60,FV,2,0,"th",12)(61,PV,3,1,"td",13),Se(),Ee(62,28),se(63,LV,2,0,"th",12)(64,VV,5,0,"td",13),Se(),se(65,BV,1,0,"tr",19)(66,jV,1,2,"tr",20),f()()(),m(67,"mat-tab",29)(68,"div",9)(69,"h3"),p(70,"Universities & OLA Grid"),f(),m(71,"div",30),bt(72,zV,14,4,"mat-card",31,Yv),f()()()()()()),e&2&&(v(6),Oe(" ",i.tokenStorage.getUsername()," "),v(4),P(i.isChangingPassword()?10:11),v(3),P(i.errorMessage()?13:-1),v(6),Z("dataSource",i.students()),v(19),Z("matHeaderRowDef",Qt(9,OS)),v(),Z("matRowDefColumns",Qt(10,OS)),v(7),Z("dataSource",i.students()),v(19),Z("matHeaderRowDef",Qt(11,FS)),v(),Z("matRowDefColumns",Qt(12,FS)),v(6),yt(i.universities()))},dependencies:[ui,wn,_o,di,ql,Gl,Hn,Yt,Ua,So,ja,_i,mi,hi,gi,pi,fi,Ja,za,Wa,Ya,Ga,$a,Za,qa,Qa,Ka,Xa,bi,vi,un,Kt,En,Dn,Wt,ss,mf,Tr,Sn,yi,Ci,wi,ds,ls,cs,Ro,ko,To],styles:[".mod-dashboard[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px}.account-card[_ngcontent-%COMP%]{margin-bottom:30px;border-top:4px solid #ffc107}.account-info[_ngcontent-%COMP%]{display:flex;gap:15px;margin-top:10px}.password-form[_ngcontent-%COMP%]{max-width:400px;display:flex;flex-direction:column;gap:10px}.form-actions[_ngcontent-%COMP%]{display:flex;gap:10px;margin-top:10px}.tab-padding[_ngcontent-%COMP%]{padding:25px 0}.mod-table[_ngcontent-%COMP%]{width:100%}.table-select[_ngcontent-%COMP%]{width:100%;font-size:.85rem}.small-select[_ngcontent-%COMP%]{width:120px}.ola-cell[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.current-ola[_ngcontent-%COMP%]{font-size:.75rem;color:#666;font-weight:500}.status-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.status-indicator[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;padding:2px 6px;border-radius:4px;background-color:#eee}.status-indicator.SENT[_ngcontent-%COMP%]{background-color:#e3f2fd;color:#1976d2}.status-indicator.SIGNED[_ngcontent-%COMP%]{background-color:#e8f5e9;color:#2e7d32}.status-indicator.REJECTED[_ngcontent-%COMP%]{background-color:#ffebee;color:#d32f2f}.formula-hint[_ngcontent-%COMP%]{color:#666;font-style:italic;margin-bottom:20px}.points-cell[_ngcontent-%COMP%]{font-weight:700;color:#3f51b5;font-size:1.1rem}.small-input[_ngcontent-%COMP%]{width:100px}.tiny-input[_ngcontent-%COMP%]{width:80px}.you-badge[_ngcontent-%COMP%]{font-size:.7rem;background-color:#ffc107;color:#000;padding:2px 6px;border-radius:10px;margin-left:5px}.uni-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:25px}.uni-card[_ngcontent-%COMP%]{border-top:3px solid #ffc107}.ola-title[_ngcontent-%COMP%]{margin:15px 0 5px;color:#555}.empty-list[_ngcontent-%COMP%]{padding:10px;font-style:italic;color:#999}.error-banner[_ngcontent-%COMP%]{background-color:#ffebee;color:#d32f2f;padding:15px;border-radius:4px;margin-bottom:20px;display:flex;align-items:center;gap:10px}  .mat-mdc-form-field-subscript-wrapper{display:none}"]})};var LS=[{path:"user",component:hf,canActivate:[Bl],data:{roles:["ROLE_USER","ROLE_MODERATOR","ROLE_ADMIN"]}},{path:"mod",component:wf,canActivate:[Bl],data:{roles:["ROLE_MODERATOR","ROLE_ADMIN"]}},{path:"admin",component:yf,canActivate:[CS],data:{roles:["ROLE_ADMIN"]}},{path:"auth/login",component:gf},{path:"signup",component:vf},{path:"",redirectTo:"auth/login",pathMatch:"full"}];var VS=(t,n)=>(console.log("example-functional-interceptor"),n(t));var $V="Authorization",Cf=class t{tokenStorage=d(Dt);intercept(n,e){console.log("class-based-interceptor");let i=n,r=this.tokenStorage.getToken();return r!="{}"&&(i=n.clone({headers:n.headers.set($V,"Bearer "+r)})),e.handle(i)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac})};var BS={providers:[Yh(),N_(LS),t_(r_(),i_(),n_([VS])),{provide:Lu,useClass:Cf,multi:!0}]};var WV=["*",[["mat-toolbar-row"]]],GV=["*","mat-toolbar-row"],qV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=E({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),jS=(()=>{class t{_elementRef=d(O);_platform=d(Ae);_document=d(ee);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=V({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&Ze(o,qV,5),i&2){let a;A(a=N())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(ct(r.color?"mat-"+r.color:""),$("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:GV,decls:2,vars:0,template:function(i,r){i&1&&(xe(WV),z(0),z(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var US=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Ce]})}return t})();function YV(t,n){t&1&&(m(0,"button",5),p(1,"Admin Panel"),f())}function ZV(t,n){t&1&&(m(0,"button",6),p(1,"Moderator Panel"),f())}function KV(t,n){t&1&&(m(0,"button",7),p(1,"User Panel"),f())}function XV(t,n){if(t&1&&(m(0,"nav",2),F(1,YV,2,0,"button",5),F(2,ZV,2,0,"button",6),F(3,KV,2,0,"button",7),f()),t&2){let e=w();v(),P(e.roles().includes("ROLE_ADMIN")?1:-1),v(),P(e.roles().includes("ROLE_MODERATOR")?2:-1),v(),P(e.roles().includes("ROLE_USER")?3:-1)}}var xf=class t{roles=D([]);authority=D("");username=D("");tokenStorage=d(Dt);displayTitle=wt(()=>{let n=this.username();return n&&n!=="{}"?`Welcome ${n}`:"Welcome to ErasmoBoard"});ngOnInit(){this.updateUserStatus()}updateUserStatus(){let n=this.tokenStorage.getToken();n&&n!=="{}"&&(this.username.set(this.tokenStorage.getUsername()),this.roles.set(this.tokenStorage.getAuthorities()),this.roles().every(e=>e==="ROLE_ADMIN"?(this.authority.set("admin"),!1):e==="ROLE_MODERATOR"?(this.authority.set("mod"),!1):(this.authority.set("user"),!0)))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-root"]],decls:9,vars:2,consts:[["color","primary"],[1,"spacer"],[1,"nav-links"],[1,"main-container"],[1,"welcome-header"],["mat-button","","routerLink","/admin","routerLinkActive","active-link"],["mat-button","","routerLink","/mod","routerLinkActive","active-link"],["mat-button","","routerLink","/user","routerLinkActive","active-link"]],template:function(e,i){e&1&&(m(0,"mat-toolbar",0)(1,"span"),p(2,"ErasmoBoard"),f(),ne(3,"span",1),F(4,XV,4,3,"nav",2),f(),m(5,"div",3)(6,"h1",4),p(7),f(),ne(8,"router-outlet"),f()),e&2&&(v(4),P(i.roles().length>0?4:-1),v(3),_e(i.displayTitle()))},dependencies:[Pl,ci,A_,US,jS,En,Dn,Yt],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}.main-container[_ngcontent-%COMP%]{padding:20px;max-width:1400px;margin:0 auto}.welcome-header[_ngcontent-%COMP%]{text-align:center;margin-top:30px;margin-bottom:40px;color:#3f51b5;font-family:Roboto,sans-serif;font-weight:300;font-size:2.5rem}.nav-links[_ngcontent-%COMP%]{display:flex;gap:10px}.active-link[_ngcontent-%COMP%]{background-color:#ffffff26!important;border-bottom:2px solid white;border-radius:0}"]})};qg(xf,BS).catch(t=>console.error(t));
