// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: kjPwt3CG0EPzWd
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_play_plasmic_levels_start_here.module.css"; // plasmic-import: fiUhXe8Zsj5ebqGZX94BP2/projectcss
import * as sty from "./PlasmicExamplePage.module.css"; // plasmic-import: kjPwt3CG0EPzWd/css
import image48K9QB8CcoKyPxy from "./images/image48.png"; // plasmic-import: K9q-B8CcoKYPxy/picture

export const PlasmicExamplePage__VariantProps = new Array();

export const PlasmicExamplePage__ArgProps = new Array();

function PlasmicExamplePage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__eKYlC)}
          >
            <img
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(defaultcss.img, sty.img)}
              role={"img"}
              src={image48K9QB8CcoKyPxy}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box___2ULb)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__chx09
                )}
              >
                {"Ceramic Shield."}
              </div>

              <div className={classNames(defaultcss.all, sty.box__bow3P)} />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__qsx8C
                )}
              >
                {"Even better spill and splash resistance."}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__qdP4E
                )}
              >
                {"Find out how"}
              </div>
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicExamplePage__ArgProps,
      internalVariantPropNames: PlasmicExamplePage__VariantProps
    });

    return PlasmicExamplePage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExamplePage";
  } else {
    func.displayName = `PlasmicExamplePage.${nodeName}`;
  }
  return func;
}

export const PlasmicExamplePage = Object.assign(
  // Top-level PlasmicExamplePage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicExamplePage
    internalVariantProps: PlasmicExamplePage__VariantProps,
    internalArgProps: PlasmicExamplePage__ArgProps
  }
);

export default PlasmicExamplePage;
/* prettier-ignore-end */
